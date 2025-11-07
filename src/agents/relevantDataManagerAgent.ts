/**
 * @fileoverview Agent responsible for managing the mock "relevant data"
 * workspace that MCP servers expose to users. The agent keeps a rich catalogue
 * of categories (departments, people, applications, policies, resources) that
 * mirrors a repository folder structure complete with schemas, python type
 * hints, example datasets, tests, and remote query blueprints.
 *
 * @module agents/relevantDataManagerAgent
 */

import * as crypto from "crypto";
import {
  ensureCacheDirectory,
  readSharedCacheEntry,
  SharedCacheEntry,
  storeSharedCacheEntry
} from "../mcpCache";

/**
 * Description for how a category folder is organised.
 *
 * @typedef {object} FolderBlueprint
 * @property {string} root Root directory for the category.
 * @property {string} configFile Path to the configuration file.
 * @property {string[]} schemaFiles JSON schema file paths.
 * @property {string[]} pythonTypes Python typing hint file paths.
 * @property {string} examplesDir Directory containing example datasets.
 * @property {string} testsDir Directory containing tests.
 * @property {string} queriesDir Directory containing query blueprints.
 */
export interface FolderBlueprint {
  root: string;
  configFile: string;
  schemaFiles: string[];
  pythonTypes: string[];
  examplesDir: string;
  testsDir: string;
  queriesDir: string;
}

/**
 * High-level relationship metadata surfaced to consumers.
 *
 * @typedef {object} RelationshipDescription
 * @property {string} name Relationship label.
 * @property {CategoryId} targetCategory Category on the other side of the relationship.
 * @property {string} viaField Field or property used to establish the link.
 * @property {"one" | "many"} cardinality Expected cardinality of the relationship.
 * @property {string} description Narrative description of the relationship.
 */
export interface RelationshipDescription {
  name: string;
  targetCategory: CategoryId;
  viaField: string;
  cardinality: "one" | "many";
  description: string;
}

/**
 * JSON schema snippet stored alongside a category.
 *
 * @typedef {object} CategorySchema
 * @property {string} name Schema name.
 * @property {string} description Schema description.
 * @property {Record<string, unknown>} schema Raw schema object.
 */
export interface CategorySchema {
  name: string;
  description: string;
  schema: Record<string, unknown>;
}

/**
 * Python typing hints that mirror the JSON schemas.
 *
 * @typedef {object} PythonTypeDefinition
 * @property {string} name Type name.
 * @property {string} description Summary for the type.
 * @property {string} definition Python snippet defining the type.
 */
export interface PythonTypeDefinition {
  name: string;
  description: string;
  definition: string;
}

/**
 * Example dataset artefact hosted in the category folder.
 *
 * @typedef {object} ExampleDataset
 * @property {string} file File path for the dataset.
 * @property {string} description Description of the example.
 * @property {Record<string, unknown>} sample Representative data sample.
 */
export interface ExampleDataset {
  file: string;
  description: string;
  sample: Record<string, unknown>;
}

/**
 * Test artefact reference stored for the category.
 *
 * @typedef {object} CategoryTestArtefact
 * @property {string} name Test name.
 * @property {string} description Test summary.
 * @property {string} command Command used to execute the test.
 */
export interface CategoryTestArtefact {
  name: string;
  description: string;
  command: string;
}

/**
 * Remote query blueprint associated with the category.
 *
 * @typedef {object} RemoteQueryBlueprint
 * @property {string} name Query name.
 * @property {string} description Query description.
 * @property {Record<string, unknown>} samplePayload Example payload for invoking the remote system.
 */
export interface RemoteQueryBlueprint {
  name: string;
  description: string;
  samplePayload: Record<string, unknown>;
}

/**
 * Summary returned when enumerating available categories.
 *
 * @typedef {object} CategorySummary
 * @property {CategoryId} id Unique identifier for the category.
 * @property {string} name Human readable name.
 * @property {string} description Category description.
 */
export interface CategorySummary {
  id: CategoryId;
  name: string;
  description: string;
}

/**
 * Minimal representation of a record stored under a category.
 *
 * @typedef {object} CategoryRecord
 * @property {string} id Unique identifier for the record.
 * @property {string} [name] Optional name field used for display.
 * @property {string} [title] Optional title field used for display.
 */
export type CategoryRecord = Record<string, unknown> & { id: string; name?: string; title?: string };

/**
 * Unique identifier for each category in the mock repository.
 *
 * @typedef {"departments" | "people" | "applications" | "companyPolicies" | "companyResources"} CategoryId
 */
export type CategoryId =
  | "departments"
  | "people"
  | "applications"
  | "companyPolicies"
  | "companyResources";

/**
 * Full configuration stored for each business category.
 *
 * @typedef {object} BusinessCategory
 * @property {CategoryId} id Category identifier.
 * @property {string} name Human readable category name.
 * @property {string} description Narrative summary of the category.
 * @property {string[]} aliases Alternative names that can be used to reference the category.
 * @property {{purpose: string, primaryKeys: string[], updateCadence: string, access: string, folder: FolderBlueprint, relationships: RelationshipDescription[]}} config Configuration metadata.
 * @property {CategorySchema[]} schemas Associated JSON schemas.
 * @property {PythonTypeDefinition[]} pythonTypes Python typing hints.
 * @property {ExampleDataset[]} examples Example datasets.
 * @property {CategoryTestArtefact[]} tests Test references.
 * @property {RemoteQueryBlueprint[]} queries Query blueprints.
 * @property {CategoryRecord[]} records Records stored under the category.
 */
export interface BusinessCategory {
  id: CategoryId;
  name: string;
  description: string;
  aliases: string[];
  config: {
    purpose: string;
    primaryKeys: string[];
    updateCadence: string;
    access: string;
    folder: FolderBlueprint;
    relationships: RelationshipDescription[];
  };
  schemas: CategorySchema[];
  pythonTypes: PythonTypeDefinition[];
  examples: ExampleDataset[];
  tests: CategoryTestArtefact[];
  queries: RemoteQueryBlueprint[];
  records: CategoryRecord[];
}

/**
 * Connections resolved for a specific record.
 *
 * @typedef {object} EntityConnections
 * @property {CategoryId} categoryId Category the record belongs to.
 * @property {string} recordId Identifier for the record being analysed.
 * @property {Array<{relationship: string, targetCategory: CategoryId, records: CategoryRecord[]}>} connections Related records grouped by relationship.
 */
export interface EntityConnections {
  categoryId: CategoryId;
  recordId: string;
  connections: Array<{
    relationship: string;
    targetCategory: CategoryId;
    records: CategoryRecord[];
  }>;
}

/**
 * Snapshot persisted to the shared cache for quick lookups.
 *
 * @typedef {object} CategorySnapshot
 * @property {CategoryId} id Category identifier.
 * @property {string} name Category name.
 * @property {string} description Category description.
 * @property {number} recordCount Number of records in the category.
 * @property {string[]} schemaNames Names of associated schemas.
 * @property {string[]} pythonTypeNames Names of Python types.
 * @property {string[]} queryNames Names of saved queries.
 * @property {string[]} exampleFiles Example file paths.
 * @property {FolderBlueprint} folder Folder blueprint for the category.
 */
export interface CategorySnapshot {
  id: CategoryId;
  name: string;
  description: string;
  recordCount: number;
  schemaNames: string[];
  pythonTypeNames: string[];
  queryNames: string[];
  exampleFiles: string[];
  folder: FolderBlueprint;
}

/** Structure representing how different categories reference each other. */
interface RelationshipDefinition {
  sourceCategory: CategoryId;
  targetCategory: CategoryId;
  relationshipName: string;
  sourceField: string;
  targetField: string;
  cardinality: "one" | "many";
}

/** Static dataset that mimics the MCP relevant-data workspace. */
const BUSINESS_DATA: Record<CategoryId, BusinessCategory> = {
  departments: {
    id: "departments",
    name: "Departments",
    description: "Organisational units, their missions, and leadership hierarchy.",
    aliases: ["dept", "org units", "teams"],
    config: {
      purpose: "Define the company's structure and accountability chains.",
      primaryKeys: ["id"],
      updateCadence: "Quarterly structure review with ad-hoc updates for reorganisations.",
      access: "All employees can view. Updates restricted to Strategy & Operations.",
      folder: {
        root: "relevant-data/departments",
        configFile: "relevant-data/departments/config.json",
        schemaFiles: [
          "relevant-data/departments/schemas/department.json",
          "relevant-data/departments/schemas/org-chart.json"
        ],
        pythonTypes: [
          "relevant-data/departments/types/department.py",
          "relevant-data/departments/types/org_chart.py"
        ],
        examplesDir: "relevant-data/departments/examples",
        testsDir: "relevant-data/departments/tests",
        queriesDir: "relevant-data/departments/queries"
      },
      relationships: [
        {
          name: "department lead",
          targetCategory: "people",
          viaField: "leadId",
          cardinality: "one",
          description: "Each department links to a single person that serves as the leader."
        },
        {
          name: "team members",
          targetCategory: "people",
          viaField: "id",
          cardinality: "many",
          description: "People reference their home department via departmentId."
        },
        {
          name: "owned applications",
          targetCategory: "applications",
          viaField: "applicationIds",
          cardinality: "many",
          description: "Departments sponsor business applications."
        },
        {
          name: "governing policies",
          targetCategory: "companyPolicies",
          viaField: "policyIds",
          cardinality: "many",
          description: "Policies align with the owning department."
        },
        {
          name: "resources",
          targetCategory: "companyResources",
          viaField: "resourceIds",
          cardinality: "many",
          description: "Playbooks and assets maintained by the team."
        }
      ]
    },
    schemas: [
      {
        name: "Department",
        description: "Shape for department metadata.",
        schema: {
          type: "object",
          required: ["id", "name", "leadId"],
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            description: { type: "string" },
            leadId: { type: "string" },
            parentDepartmentId: { type: ["string", "null"] },
            applicationIds: { type: "array", items: { type: "string" } },
            policyIds: { type: "array", items: { type: "string" } },
            resourceIds: { type: "array", items: { type: "string" } }
          }
        }
      },
      {
        name: "OrgChart",
        description: "Hierarchy representation for organisational modelling.",
        schema: {
          type: "object",
          properties: {
            nodes: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  parentId: { type: ["string", "null"] },
                  label: { type: "string" }
                }
              }
            }
          }
        }
      }
    ],
    pythonTypes: [
      {
        name: "Department",
        description: "TypedDict describing the department data structure.",
        definition: `"""class Department(TypedDict):
    id: str
    name: str
    description: str
    leadId: str
    parentDepartmentId: NotRequired[Optional[str]]
    applicationIds: List[str]
    policyIds: List[str]
    resourceIds: List[str]
"""`
      },
      {
        name: "OrgChartNode",
        description: "Typed node representing the company hierarchy graph.",
        definition: `"""class OrgChartNode(TypedDict):
    id: str
    parentId: Optional[str]
    label: str
"""`
      }
    ],
    examples: [
      {
        file: "relevant-data/departments/examples/analytics.json",
        description: "Analytics department definition used in demos.",
        sample: {
          id: "dept-analytics",
          name: "Insight & Analytics",
          description: "Delivers customer and product insights.",
          leadId: "person-005",
          parentDepartmentId: "dept-operations",
          applicationIds: ["app-aurora", "app-atlas"],
          policyIds: ["policy-data-handling"],
          resourceIds: ["resource-analytics-playbook"]
        }
      }
    ],
    tests: [
      {
        name: "Validate department schema",
        description: "Ensures config.json aligns with schema expectations.",
        command: "pytest relevant-data/departments/tests/test_schema.py"
      }
    ],
    queries: [
      {
        name: "List departments",
        description: "Fetch department metadata from the HR master data API.",
        samplePayload: {
          endpoint: "https://mdm.example.com/departments",
          method: "GET"
        }
      }
    ],
    records: [
      {
        id: "dept-analytics",
        name: "Insight & Analytics",
        description: "Delivers customer and product insights for go-to-market teams.",
        leadId: "person-005",
        parentDepartmentId: "dept-operations",
        applicationIds: ["app-aurora", "app-atlas"],
        policyIds: ["policy-data-handling"],
        resourceIds: ["resource-analytics-playbook"]
      },
      {
        id: "dept-platform",
        name: "Platform Engineering",
        description: "Owns shared services, developer tooling, and runtime infrastructure.",
        leadId: "person-006",
        parentDepartmentId: "dept-operations",
        applicationIds: ["app-foundry"],
        policyIds: ["policy-platform-standards"],
        resourceIds: ["resource-platform-runbook"]
      },
      {
        id: "dept-operations",
        name: "Strategy & Operations",
        description: "Central operations ensuring alignment and governance.",
        leadId: "person-007",
        parentDepartmentId: null,
        applicationIds: ["app-oracle"],
        policyIds: ["policy-remote-work", "policy-data-handling"],
        resourceIds: ["resource-operating-model"]
      }
    ]
  },
  people: {
    id: "people",
    name: "People",
    description: "Employee directory complete with capabilities and system access.",
    aliases: ["employees", "teammates", "staff"],
    config: {
      purpose: "Surface who can help, their skills, and reporting structure.",
      primaryKeys: ["id", "email"],
      updateCadence: "Nightly sync from HRIS with manual enrichment allowed.",
      access: "All employees can view contact and role data.",
      folder: {
        root: "relevant-data/people",
        configFile: "relevant-data/people/config.json",
        schemaFiles: [
          "relevant-data/people/schemas/person.json",
          "relevant-data/people/schemas/access.json"
        ],
        pythonTypes: [
          "relevant-data/people/types/person.py",
          "relevant-data/people/types/access_profile.py"
        ],
        examplesDir: "relevant-data/people/examples",
        testsDir: "relevant-data/people/tests",
        queriesDir: "relevant-data/people/queries"
      },
      relationships: [
        {
          name: "department",
          targetCategory: "departments",
          viaField: "departmentId",
          cardinality: "one",
          description: "Each person belongs to a single department."
        },
        {
          name: "applications",
          targetCategory: "applications",
          viaField: "applicationIds",
          cardinality: "many",
          description: "Applications the person can access."
        },
        {
          name: "policies acknowledged",
          targetCategory: "companyPolicies",
          viaField: "policyAcks",
          cardinality: "many",
          description: "Policies the person has accepted."
        },
        {
          name: "resources contributed",
          targetCategory: "companyResources",
          viaField: "resourceIds",
          cardinality: "many",
          description: "Resources authored or maintained by the person."
        }
      ]
    },
    schemas: [
      {
        name: "Person",
        description: "Core employee record schema.",
        schema: {
          type: "object",
          required: ["id", "name", "departmentId"],
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            role: { type: "string" },
            departmentId: { type: "string" },
            managerId: { type: ["string", "null"] },
            location: { type: "string" },
            skills: { type: "array", items: { type: "string" } },
            applicationIds: { type: "array", items: { type: "string" } },
            policyAcks: { type: "array", items: { type: "string" } },
            resourceIds: { type: "array", items: { type: "string" } }
          }
        }
      }
    ],
    pythonTypes: [
      {
        name: "Person",
        description: "TypedDict for the employee object.",
        definition: `"""class Person(TypedDict):
    id: str
    name: str
    email: str
    role: str
    departmentId: str
    managerId: Optional[str]
    location: str
    skills: List[str]
    applicationIds: List[str]
    policyAcks: List[str]
    resourceIds: List[str]
"""`
      }
    ],
    examples: [
      {
        file: "relevant-data/people/examples/ava_chen.json",
        description: "Lead Data Scientist profile.",
        sample: {
          id: "person-001",
          name: "Ava Chen",
          email: "ava.chen@example.com",
          role: "Lead Data Scientist",
          departmentId: "dept-analytics",
          managerId: "person-005",
          location: "New York",
          skills: ["python", "mlops", "sql"],
          applicationIds: ["app-aurora", "app-atlas"],
          policyAcks: ["policy-data-handling", "policy-remote-work"],
          resourceIds: ["resource-ml-handbook"]
        }
      }
    ],
    tests: [
      {
        name: "Validate people schema",
        description: "Ensures new records conform to the JSON schema.",
        command: "pytest relevant-data/people/tests/test_schema.py"
      }
    ],
    queries: [
      {
        name: "Find people by skill",
        description: "Filter employees by capability via the talent service.",
        samplePayload: {
          endpoint: "https://talent.example.com/api/people",
          method: "POST",
          body: { filter: { skills: ["python"] } }
        }
      }
    ],
    records: [
      {
        id: "person-001",
        name: "Ava Chen",
        email: "ava.chen@example.com",
        role: "Lead Data Scientist",
        departmentId: "dept-analytics",
        managerId: "person-005",
        location: "New York",
        skills: ["python", "mlops", "sql"],
        applicationIds: ["app-aurora", "app-atlas"],
        policyAcks: ["policy-data-handling", "policy-remote-work"],
        resourceIds: ["resource-ml-handbook"]
      },
      {
        id: "person-002",
        name: "Miguel Ortega",
        email: "miguel.ortega@example.com",
        role: "Senior Backend Engineer",
        departmentId: "dept-platform",
        managerId: "person-006",
        location: "Austin",
        skills: ["node", "graphql", "observability"],
        applicationIds: ["app-foundry"],
        policyAcks: ["policy-platform-standards", "policy-remote-work"],
        resourceIds: ["resource-platform-runbook"]
      },
      {
        id: "person-003",
        name: "Priya Nair",
        email: "priya.nair@example.com",
        role: "Product Manager",
        departmentId: "dept-analytics",
        managerId: "person-007",
        location: "Remote - UK",
        skills: ["roadmapping", "analytics", "facilitation"],
        applicationIds: ["app-aurora"],
        policyAcks: ["policy-remote-work"],
        resourceIds: ["resource-operating-model"]
      },
      {
        id: "person-004",
        name: "Noah Patel",
        email: "noah.patel@example.com",
        role: "Solutions Architect",
        departmentId: "dept-platform",
        managerId: "person-006",
        location: "Toronto",
        skills: ["cloud", "compliance", "presentations"],
        applicationIds: ["app-foundry", "app-atlas"],
        policyAcks: ["policy-platform-standards"],
        resourceIds: ["resource-platform-runbook"]
      },
      {
        id: "person-005",
        name: "Samira Ali",
        email: "samira.ali@example.com",
        role: "Director of Data",
        departmentId: "dept-analytics",
        managerId: "person-007",
        location: "New York",
        skills: ["strategy", "leadership", "analytics"],
        applicationIds: ["app-aurora", "app-atlas"],
        policyAcks: ["policy-data-handling", "policy-remote-work"],
        resourceIds: ["resource-analytics-playbook"]
      },
      {
        id: "person-006",
        name: "Julian Ross",
        email: "julian.ross@example.com",
        role: "Head of Platform",
        departmentId: "dept-platform",
        managerId: "person-007",
        location: "Austin",
        skills: ["platform", "architecture", "mentoring"],
        applicationIds: ["app-foundry"],
        policyAcks: ["policy-platform-standards", "policy-remote-work"],
        resourceIds: ["resource-platform-runbook"]
      },
      {
        id: "person-007",
        name: "Elena Brooks",
        email: "elena.brooks@example.com",
        role: "Chief Operating Officer",
        departmentId: "dept-operations",
        managerId: null,
        location: "San Francisco",
        skills: ["operations", "communications", "governance"],
        applicationIds: ["app-oracle"],
        policyAcks: ["policy-remote-work"],
        resourceIds: ["resource-operating-model"]
      }
    ]
  },
  applications: {
    id: "applications",
    name: "Applications",
    description: "Internal platforms, SaaS tooling, and business systems.",
    aliases: ["apps", "software", "systems"],
    config: {
      purpose: "Map business capabilities to the systems that deliver them.",
      primaryKeys: ["id"],
      updateCadence: "Change management board weekly updates.",
      access: "Engineering and IT stakeholders.",
      folder: {
        root: "relevant-data/applications",
        configFile: "relevant-data/applications/config.json",
        schemaFiles: [
          "relevant-data/applications/schemas/application.json"
        ],
        pythonTypes: [
          "relevant-data/applications/types/application.py"
        ],
        examplesDir: "relevant-data/applications/examples",
        testsDir: "relevant-data/applications/tests",
        queriesDir: "relevant-data/applications/queries"
      },
      relationships: [
        {
          name: "owning department",
          targetCategory: "departments",
          viaField: "ownerDepartmentId",
          cardinality: "one",
          description: "Each application has an accountable department."
        },
        {
          name: "policy coverage",
          targetCategory: "companyPolicies",
          viaField: "relatedPolicyIds",
          cardinality: "many",
          description: "Security and compliance policies governing the application."
        },
        {
          name: "dependent resources",
          targetCategory: "companyResources",
          viaField: "resourceIds",
          cardinality: "many",
          description: "Runbooks and assets supporting the system."
        }
      ]
    },
    schemas: [
      {
        name: "Application",
        description: "System metadata with ownership and criticality.",
        schema: {
          type: "object",
          required: ["id", "name", "ownerDepartmentId"],
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            type: { type: "string" },
            ownerDepartmentId: { type: "string" },
            criticality: { enum: ["low", "medium", "high"] },
            relatedPolicyIds: { type: "array", items: { type: "string" } },
            resourceIds: { type: "array", items: { type: "string" } }
          }
        }
      }
    ],
    pythonTypes: [
      {
        name: "Application",
        description: "TypedDict for application metadata.",
        definition: `"""class Application(TypedDict):
    id: str
    name: str
    type: str
    ownerDepartmentId: str
    criticality: Literal['low', 'medium', 'high']
    relatedPolicyIds: List[str]
    resourceIds: List[str]
"""`
      }
    ],
    examples: [
      {
        file: "relevant-data/applications/examples/aurora.json",
        description: "Analytics data lake platform entry.",
        sample: {
          id: "app-aurora",
          name: "Aurora Lake",
          type: "data-platform",
          ownerDepartmentId: "dept-analytics",
          criticality: "high",
          relatedPolicyIds: ["policy-data-handling"],
          resourceIds: ["resource-analytics-playbook"]
        }
      }
    ],
    tests: [
      {
        name: "Validate application schema",
        description: "Ensures required ownership metadata exists.",
        command: "pytest relevant-data/applications/tests/test_schema.py"
      }
    ],
    queries: [
      {
        name: "Fetch critical applications",
        description: "Retrieve all high criticality systems from the CMDB.",
        samplePayload: {
          endpoint: "https://cmdb.example.com/api/applications",
          method: "POST",
          body: { filter: { criticality: "high" } }
        }
      }
    ],
    records: [
      {
        id: "app-aurora",
        name: "Aurora Lake",
        type: "data-platform",
        ownerDepartmentId: "dept-analytics",
        criticality: "high",
        relatedPolicyIds: ["policy-data-handling"],
        resourceIds: ["resource-analytics-playbook"]
      },
      {
        id: "app-atlas",
        name: "Atlas Insights",
        type: "analytics",
        ownerDepartmentId: "dept-analytics",
        criticality: "medium",
        relatedPolicyIds: ["policy-data-handling"],
        resourceIds: ["resource-ml-handbook"]
      },
      {
        id: "app-foundry",
        name: "Foundry Platform",
        type: "platform",
        ownerDepartmentId: "dept-platform",
        criticality: "high",
        relatedPolicyIds: ["policy-platform-standards"],
        resourceIds: ["resource-platform-runbook"]
      },
      {
        id: "app-oracle",
        name: "Oracle ERP",
        type: "erp",
        ownerDepartmentId: "dept-operations",
        criticality: "high",
        relatedPolicyIds: ["policy-remote-work"],
        resourceIds: ["resource-operating-model"]
      }
    ]
  },
  companyPolicies: {
    id: "companyPolicies",
    name: "Company Policies",
    description: "Governance, compliance, and operating procedures.",
    aliases: ["policies", "standards"],
    config: {
      purpose: "Provide authoritative guidance for operations and compliance.",
      primaryKeys: ["id"],
      updateCadence: "Policy board monthly review.",
      access: "All employees. Approvals handled via Governance & Risk.",
      folder: {
        root: "relevant-data/company-policies",
        configFile: "relevant-data/company-policies/config.json",
        schemaFiles: ["relevant-data/company-policies/schemas/policy.json"],
        pythonTypes: ["relevant-data/company-policies/types/policy.py"],
        examplesDir: "relevant-data/company-policies/examples",
        testsDir: "relevant-data/company-policies/tests",
        queriesDir: "relevant-data/company-policies/queries"
      },
      relationships: [
        {
          name: "owning department",
          targetCategory: "departments",
          viaField: "ownerDepartmentId",
          cardinality: "one",
          description: "Department accountable for the policy."
        },
        {
          name: "referenced applications",
          targetCategory: "applications",
          viaField: "applicationIds",
          cardinality: "many",
          description: "Systems that enforce or rely on the policy."
        },
        {
          name: "linked resources",
          targetCategory: "companyResources",
          viaField: "relatedResourceIds",
          cardinality: "many",
          description: "Training or documentation supporting the policy."
        }
      ]
    },
    schemas: [
      {
        name: "Policy",
        description: "Company policy metadata schema.",
        schema: {
          type: "object",
          required: ["id", "title", "ownerDepartmentId"],
          properties: {
            id: { type: "string" },
            title: { type: "string" },
            category: { type: "string" },
            summary: { type: "string" },
            ownerDepartmentId: { type: "string" },
            relatedResourceIds: { type: "array", items: { type: "string" } },
            applicationIds: { type: "array", items: { type: "string" } }
          }
        }
      }
    ],
    pythonTypes: [
      {
        name: "Policy",
        description: "TypedDict for policy metadata.",
        definition: `"""class Policy(TypedDict):
    id: str
    title: str
    category: str
    summary: str
    ownerDepartmentId: str
    relatedResourceIds: List[str]
    applicationIds: List[str]
"""`
      }
    ],
    examples: [
      {
        file: "relevant-data/company-policies/examples/data_handling.json",
        description: "Data handling standard reference.",
        sample: {
          id: "policy-data-handling",
          title: "Data Handling Standard",
          category: "Security",
          summary: "Guidelines for ingesting, storing, and sharing company data.",
          ownerDepartmentId: "dept-operations",
          relatedResourceIds: ["resource-data-handbook"],
          applicationIds: ["app-aurora", "app-atlas"]
        }
      }
    ],
    tests: [
      {
        name: "Validate policy schema",
        description: "Ensures policy metadata is complete.",
        command: "pytest relevant-data/company-policies/tests/test_schema.py"
      }
    ],
    queries: [
      {
        name: "Fetch policy index",
        description: "Pull latest policies from the governance registry.",
        samplePayload: {
          endpoint: "https://governance.example.com/api/policies",
          method: "GET"
        }
      }
    ],
    records: [
      {
        id: "policy-data-handling",
        title: "Data Handling Standard",
        category: "Security",
        summary: "Guidelines for ingesting, storing, and sharing company data.",
        ownerDepartmentId: "dept-operations",
        relatedResourceIds: ["resource-data-handbook", "resource-analytics-playbook"],
        applicationIds: ["app-aurora", "app-atlas"]
      },
      {
        id: "policy-platform-standards",
        title: "Platform Reliability Standards",
        category: "Engineering",
        summary: "Expectations for uptime, observability, and release hygiene.",
        ownerDepartmentId: "dept-platform",
        relatedResourceIds: ["resource-platform-runbook"],
        applicationIds: ["app-foundry"]
      },
      {
        id: "policy-remote-work",
        title: "Remote Work Playbook",
        category: "Operations",
        summary: "How to collaborate across time zones and hybrid schedules.",
        ownerDepartmentId: "dept-operations",
        relatedResourceIds: ["resource-operating-model"],
        applicationIds: ["app-oracle"]
      }
    ]
  },
  companyResources: {
    id: "companyResources",
    name: "Company Resources",
    description: "Docs, runbooks, and training materials teams can leverage.",
    aliases: ["resources", "documents", "knowledge"],
    config: {
      purpose: "Provide quick access to the artefacts that unblock work.",
      primaryKeys: ["id"],
      updateCadence: "Continuous contributions with quarterly reviews.",
      access: "Default public inside the organisation.",
      folder: {
        root: "relevant-data/company-resources",
        configFile: "relevant-data/company-resources/config.json",
        schemaFiles: ["relevant-data/company-resources/schemas/resource.json"],
        pythonTypes: ["relevant-data/company-resources/types/resource.py"],
        examplesDir: "relevant-data/company-resources/examples",
        testsDir: "relevant-data/company-resources/tests",
        queriesDir: "relevant-data/company-resources/queries"
      },
      relationships: [
        {
          name: "owning department",
          targetCategory: "departments",
          viaField: "departmentId",
          cardinality: "one",
          description: "Department responsible for maintaining the asset."
        },
        {
          name: "supporting policies",
          targetCategory: "companyPolicies",
          viaField: "linkedPolicyIds",
          cardinality: "many",
          description: "Policies that reference or mandate the resource."
        },
        {
          name: "applications",
          targetCategory: "applications",
          viaField: "applicationIds",
          cardinality: "many",
          description: "Systems that use the playbook or template."
        }
      ]
    },
    schemas: [
      {
        name: "Resource",
        description: "Documentation artefact schema.",
        schema: {
          type: "object",
          required: ["id", "name", "departmentId"],
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            type: { type: "string" },
            departmentId: { type: "string" },
            description: { type: "string" },
            linkedPolicyIds: { type: "array", items: { type: "string" } },
            applicationIds: { type: "array", items: { type: "string" } }
          }
        }
      }
    ],
    pythonTypes: [
      {
        name: "Resource",
        description: "TypedDict for knowledge artefacts.",
        definition: `"""class Resource(TypedDict):
    id: str
    name: str
    type: str
    departmentId: str
    description: str
    linkedPolicyIds: List[str]
    applicationIds: List[str]
"""`
      }
    ],
    examples: [
      {
        file: "relevant-data/company-resources/examples/analytics_playbook.json",
        description: "End-to-end guide for analytics delivery.",
        sample: {
          id: "resource-analytics-playbook",
          name: "Analytics Playbook",
          type: "playbook",
          departmentId: "dept-analytics",
          description: "Step-by-step guide for data product delivery.",
          linkedPolicyIds: ["policy-data-handling"],
          applicationIds: ["app-aurora", "app-atlas"]
        }
      }
    ],
    tests: [
      {
        name: "Validate resource schema",
        description: "Ensures resources have ownership metadata.",
        command: "pytest relevant-data/company-resources/tests/test_schema.py"
      }
    ],
    queries: [
      {
        name: "Search knowledge base",
        description: "Retrieve resources matching tags from the intranet.",
        samplePayload: {
          endpoint: "https://intranet.example.com/api/resources",
          method: "POST",
          body: { query: "analytics" }
        }
      }
    ],
    records: [
      {
        id: "resource-analytics-playbook",
        name: "Analytics Playbook",
        type: "playbook",
        departmentId: "dept-analytics",
        description: "Step-by-step guide for data product delivery.",
        linkedPolicyIds: ["policy-data-handling"],
        applicationIds: ["app-aurora", "app-atlas"]
      },
      {
        id: "resource-platform-runbook",
        name: "Platform Reliability Runbook",
        type: "runbook",
        departmentId: "dept-platform",
        description: "Runbook for handling platform incidents.",
        linkedPolicyIds: ["policy-platform-standards"],
        applicationIds: ["app-foundry"]
      },
      {
        id: "resource-operating-model",
        name: "Operating Model Overview",
        type: "handbook",
        departmentId: "dept-operations",
        description: "Explains how teams collaborate and govern work.",
        linkedPolicyIds: ["policy-remote-work"],
        applicationIds: ["app-oracle"]
      },
      {
        id: "resource-ml-handbook",
        name: "Machine Learning Delivery Handbook",
        type: "handbook",
        departmentId: "dept-analytics",
        description: "Patterns, reviews, and quality gates for ML projects.",
        linkedPolicyIds: ["policy-data-handling"],
        applicationIds: ["app-atlas"]
      },
      {
        id: "resource-data-handbook",
        name: "Data Governance Handbook",
        type: "handbook",
        departmentId: "dept-operations",
        description: "Policies and best practices for governing data.",
        linkedPolicyIds: ["policy-data-handling"],
        applicationIds: ["app-aurora", "app-oracle"]
      }
    ]
  }
};

/** Relationship wiring that helps resolve connections between records. */
const RELATIONSHIP_DEFINITIONS: RelationshipDefinition[] = [
  {
    sourceCategory: "departments",
    targetCategory: "people",
    relationshipName: "teamMembers",
    sourceField: "id",
    targetField: "departmentId",
    cardinality: "many"
  },
  {
    sourceCategory: "departments",
    targetCategory: "people",
    relationshipName: "lead",
    sourceField: "leadId",
    targetField: "id",
    cardinality: "one"
  },
  {
    sourceCategory: "departments",
    targetCategory: "applications",
    relationshipName: "applications",
    sourceField: "applicationIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "departments",
    targetCategory: "companyPolicies",
    relationshipName: "policies",
    sourceField: "policyIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "departments",
    targetCategory: "companyResources",
    relationshipName: "resources",
    sourceField: "resourceIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "people",
    targetCategory: "departments",
    relationshipName: "department",
    sourceField: "departmentId",
    targetField: "id",
    cardinality: "one"
  },
  {
    sourceCategory: "people",
    targetCategory: "people",
    relationshipName: "manager",
    sourceField: "managerId",
    targetField: "id",
    cardinality: "one"
  },
  {
    sourceCategory: "people",
    targetCategory: "applications",
    relationshipName: "applications",
    sourceField: "applicationIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "people",
    targetCategory: "companyPolicies",
    relationshipName: "policies",
    sourceField: "policyAcks",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "people",
    targetCategory: "companyResources",
    relationshipName: "resources",
    sourceField: "resourceIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "applications",
    targetCategory: "departments",
    relationshipName: "owner",
    sourceField: "ownerDepartmentId",
    targetField: "id",
    cardinality: "one"
  },
  {
    sourceCategory: "applications",
    targetCategory: "companyPolicies",
    relationshipName: "policies",
    sourceField: "relatedPolicyIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "applications",
    targetCategory: "companyResources",
    relationshipName: "resources",
    sourceField: "resourceIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "companyPolicies",
    targetCategory: "departments",
    relationshipName: "owner",
    sourceField: "ownerDepartmentId",
    targetField: "id",
    cardinality: "one"
  },
  {
    sourceCategory: "companyPolicies",
    targetCategory: "applications",
    relationshipName: "applications",
    sourceField: "applicationIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "companyPolicies",
    targetCategory: "companyResources",
    relationshipName: "resources",
    sourceField: "relatedResourceIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "companyResources",
    targetCategory: "departments",
    relationshipName: "department",
    sourceField: "departmentId",
    targetField: "id",
    cardinality: "one"
  },
  {
    sourceCategory: "companyResources",
    targetCategory: "companyPolicies",
    relationshipName: "policies",
    sourceField: "linkedPolicyIds",
    targetField: "id",
    cardinality: "many"
  },
  {
    sourceCategory: "companyResources",
    targetCategory: "applications",
    relationshipName: "applications",
    sourceField: "applicationIds",
    targetField: "id",
    cardinality: "many"
  }
];

/**
 * Error thrown when a caller references an unknown category.
 *
 * @example
 * ```ts
 * throw new UnknownCategoryError("mystery");
 * ```
 */
export class UnknownCategoryError extends Error {
  /**
   * @param {string} topic Topic or identifier that could not be resolved.
   */
  constructor(topic: string) {
    super(`Unknown category or topic: ${topic}`);
  }
}

/**
 * Agent that manages the relevant-data workspace representation.
 *
 * @example
 * ```ts
 * const manager = new RelevantDataManagerAgent();
 * const categories = manager.listCategories();
 * ```
 */
export class RelevantDataManagerAgent {
  private readonly cacheDirPromise: Promise<string>;

  /**
   * Create a {@link RelevantDataManagerAgent}.
   *
   * @param {Promise<string>} [cacheDirPromise] Optional promise that resolves to the cache directory path.
   */
  constructor(cacheDirPromise?: Promise<string>) {
    this.cacheDirPromise = cacheDirPromise ?? ensureCacheDirectory();
  }

  /**
   * Enumerate the categories available to the MCP client.
   *
   * @returns {CategorySummary[]} List of category identifiers, names, and descriptions.
   */
  listCategories(): CategorySummary[] {
    return Object.values(BUSINESS_DATA).map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description
    }));
  }

  /**
   * Resolve a topic or identifier to the underlying category definition.
   *
   * @param {string} topicOrId Identifier, human readable name, or alias.
   * @returns {BusinessCategory} Matching category definition.
   * @throws {UnknownCategoryError} When no category matches the provided value.
   */
  getCategory(topicOrId: string): BusinessCategory {
    const normalised = topicOrId.trim().toLowerCase();
    const category = Object.values(BUSINESS_DATA).find((entry) =>
      [entry.id.toLowerCase(), entry.name.toLowerCase(), ...entry.aliases.map((alias) => alias.toLowerCase())].includes(
        normalised
      )
    );
    if (!category) {
      throw new UnknownCategoryError(topicOrId);
    }
    return category;
  }

  /**
   * Retrieve the folder blueprint for a given topic.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {FolderBlueprint} Blueprint describing repository folder structure.
   */
  getFolderBlueprint(topicOrId: string): FolderBlueprint {
    return this.getCategory(topicOrId).config.folder;
  }

  /**
   * Access category configuration metadata such as relationships.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {BusinessCategory["config"]} Category configuration metadata.
   */
  getCategoryConfig(topicOrId: string): BusinessCategory["config"] {
    return this.getCategory(topicOrId).config;
  }

  /**
   * Access the JSON schemas associated with a category.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {CategorySchema[]} JSON schema descriptors.
   */
  getCategorySchemas(topicOrId: string): CategorySchema[] {
    return this.getCategory(topicOrId).schemas;
  }

  /**
   * Retrieve Python type definitions provided as guidance for SDK authors.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {PythonTypeDefinition[]} Python type hints.
   */
  getPythonTypes(topicOrId: string): PythonTypeDefinition[] {
    return this.getCategory(topicOrId).pythonTypes;
  }

  /**
   * Fetch example datasets included inside the category folder. These help the
   * orchestration layer generate realistic tool requests.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {ExampleDataset[]} Example dataset descriptors.
   */
  getExamples(topicOrId: string): ExampleDataset[] {
    return this.getCategory(topicOrId).examples;
  }

  /**
   * List the unit/integration tests referenced by the category.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {CategoryTestArtefact[]} Test references.
   */
  getTests(topicOrId: string): CategoryTestArtefact[] {
    return this.getCategory(topicOrId).tests;
  }

  /**
   * Retrieve query blueprints that demonstrate how to call the authoritative
   * upstream system that owns the category data.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {RemoteQueryBlueprint[]} Query blueprints.
   */
  getQueries(topicOrId: string): RemoteQueryBlueprint[] {
    return this.getCategory(topicOrId).queries;
  }

  /**
   * Return all records stored in the local mock dataset for a category.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {CategoryRecord[]} Stored records.
   */
  getRecords(topicOrId: string): CategoryRecord[] {
    return this.getCategory(topicOrId).records;
  }

  /**
   * Retrieve a single record by identifier.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @param {string} recordId Identifier of the record within the category.
   * @returns {CategoryRecord | undefined} Matching record when present.
   */
  getRecord(topicOrId: string, recordId: string): CategoryRecord | undefined {
    return this.getRecords(topicOrId).find((record) => record.id === recordId);
  }

  /**
   * Perform a keyword search across every category.
   *
   * @param {string} keyword Case-insensitive search string.
   * @returns {Array<{categoryId: CategoryId, record: CategoryRecord, matchingFields: string[]}>} Matching records with field context.
   */
  searchAcrossCategories(keyword: string): Array<{
    categoryId: CategoryId;
    record: CategoryRecord;
    matchingFields: string[];
  }> {
    const needle = keyword.trim().toLowerCase();
    const matches: Array<{ categoryId: CategoryId; record: CategoryRecord; matchingFields: string[] }> = [];
    if (!needle) {
      return matches;
    }
    for (const category of Object.values(BUSINESS_DATA)) {
      for (const record of category.records) {
        const matchedFields: string[] = [];
        for (const [field, value] of Object.entries(record)) {
          if (value == null) {
            continue;
          }
          if (typeof value === "string" && value.toLowerCase().includes(needle)) {
            matchedFields.push(field);
            continue;
          }
          if (Array.isArray(value) && value.some((item) => typeof item === "string" && item.toLowerCase().includes(needle))) {
            matchedFields.push(field);
          }
        }
        if (matchedFields.length > 0) {
          matches.push({ categoryId: category.id, record, matchingFields: matchedFields });
        }
      }
    }
    return matches;
  }

  /**
   * Build a snapshot view of a category and persist it to the shared cache.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @returns {Promise<CategorySnapshot>} Snapshot summarising the category state.
   */
  async getOrCreateSnapshot(topicOrId: string): Promise<CategorySnapshot> {
    const category = this.getCategory(topicOrId);
    const cacheKey = `relevant-data:${category.id}:snapshot`;
    const cacheDir = await this.cacheDirPromise;
    const cached = await readSharedCacheEntry<CategorySnapshot>(cacheDir, cacheKey);
    if (cached) {
      return cached.value;
    }
    const snapshot: CategorySnapshot = {
      id: category.id,
      name: category.name,
      description: category.description,
      recordCount: category.records.length,
      schemaNames: category.schemas.map((schema) => schema.name),
      pythonTypeNames: category.pythonTypes.map((typeDef) => typeDef.name),
      queryNames: category.queries.map((query) => query.name),
      exampleFiles: category.examples.map((example) => example.file),
      folder: category.config.folder
    };
    const entry: SharedCacheEntry<CategorySnapshot> = {
      key: cacheKey,
      toolName: "relevant-data-manager",
      timestamp: new Date().toISOString(),
      value: snapshot,
      metadata: {
        recordHash: this.hashRecords(category.records)
      }
    };
    await storeSharedCacheEntry(cacheDir, entry);
    return snapshot;
  }

  /**
   * Resolve relationships for a given record across categories.
   *
   * @param {string} topicOrId Category identifier, name, or alias.
   * @param {string} recordId Record identifier within the category.
   * @returns {EntityConnections} Relationship graph for the record.
   * @throws {Error} When the requested record cannot be found.
   */
  getEntityConnections(topicOrId: string, recordId: string): EntityConnections {
    const category = this.getCategory(topicOrId);
    const record = this.getRecord(category.id, recordId);
    if (!record) {
      throw new Error(`Record ${recordId} not found in category ${category.id}`);
    }
    const connections: EntityConnections["connections"] = [];
    for (const relationship of RELATIONSHIP_DEFINITIONS.filter((rule) => rule.sourceCategory === category.id)) {
      const value = record[relationship.sourceField];
      if (value == null) {
        continue;
      }
      const relatedRecords = this.resolveTargets(relationship, value);
      if (relatedRecords.length === 0) {
        continue;
      }
      connections.push({
        relationship: relationship.relationshipName,
        targetCategory: relationship.targetCategory,
        records: relatedRecords
      });
    }
    return { categoryId: category.id, recordId, connections };
  }

  /**
   * Compute a stable hash representing the current record state.
   *
   * @param {CategoryRecord[]} records Records to hash.
   * @returns {string} SHA1 digest string.
   */
  private hashRecords(records: CategoryRecord[]): string {
    const normalised = records.map((record) =>
      Object.fromEntries(Object.entries(record).sort(([left], [right]) => left.localeCompare(right)))
    );
    return crypto.createHash("sha1").update(JSON.stringify(normalised)).digest("hex");
  }

  /**
   * Resolve related records for a relationship definition.
   *
   * @param {RelationshipDefinition} relationship Relationship rule describing how to locate related records.
   * @param {unknown} value Value stored on the source record.
   * @returns {CategoryRecord[]} Related records that satisfy the relationship definition.
   */
  private resolveTargets(
    relationship: RelationshipDefinition,
    value: unknown
  ): CategoryRecord[] {
    const targetCategory = BUSINESS_DATA[relationship.targetCategory];
    if (!targetCategory) {
      return [];
    }
    const values: string[] = Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string")
      : typeof value === "string" || typeof value === "number"
      ? [String(value)]
      : [];
    if (values.length === 0) {
      return [];
    }
    return targetCategory.records.filter((record) => {
      const targetValue = record[relationship.targetField];
      if (targetValue == null) {
        return false;
      }
      if (Array.isArray(targetValue)) {
        return targetValue.some((item) => values.includes(String(item)));
      }
      return values.includes(String(targetValue));
    });
  }
}

/**
 * Factory helper that constructs a {@link RelevantDataManagerAgent}.
 *
 * @returns {RelevantDataManagerAgent} Configured manager instance.
 * @example
 * ```ts
 * const manager = createRelevantDataManagerAgent();
 * ```
 */
export function createRelevantDataManagerAgent(): RelevantDataManagerAgent {
  return new RelevantDataManagerAgent();
}

export { BUSINESS_DATA as MOCK_RELEVANT_DATASET };
