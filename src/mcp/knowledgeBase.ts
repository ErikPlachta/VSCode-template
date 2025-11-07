/**
 * @file knowledgeBase implementation for mcp module
 */

export interface KnowledgeDocument {
  id: string;
  title: string;
  content: string;
  tags?: string[];
}

export interface KnowledgeHit {
  id: string;
  title: string;
  summary: string;
  score: number;
}

export class KnowledgeBase {
  private readonly documents = new Map<string, KnowledgeDocument>();

  indexDocument(document: KnowledgeDocument): void {
    this.documents.set(document.id, document);
  }

  indexDocuments(documents: KnowledgeDocument[]): void {
    documents.forEach((document) => this.indexDocument(document));
  }

  query(term: string, limit = 3): KnowledgeHit[] {
    const keywords = new Set(
      (term.toLowerCase().match(/\b[\w-]{3,}\b/g) ?? []).map((token) => token)
    );
    const hits: KnowledgeHit[] = [];
    this.documents.forEach((document) => {
      const text = `${document.title} ${document.content}`.toLowerCase();
      let score = 0;
      keywords.forEach((keyword) => {
        if (text.includes(keyword)) {
          score += 1;
        }
      });
      if (score > 0) {
        hits.push({
          id: document.id,
          title: document.title,
          summary: summarize(document.content),
          score,
        });
      }
    });
    return hits.sort((a, b) => b.score - a.score).slice(0, limit);
  }
}

function summarize(content: string, maxLength = 160): string {
  const trimmed = content.replace(/\s+/g, " ").trim();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  const snippet = trimmed.slice(0, maxLength);
  const lastSpace = snippet.lastIndexOf(" ");
  return `${snippet.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}
