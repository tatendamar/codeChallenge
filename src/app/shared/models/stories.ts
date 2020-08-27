export class Stories {
  id: number;
  createdBy: number;
  summary: string;
  description: string;
  type: string;
  cost: number;
  complexity: string;
  estimatedHrs: string;
  status: string;
}

export interface Story {
  summary: string;
  description: string;
  type: string;
  complexity: string;
}
