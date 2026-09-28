import type { ExpertiseItem } from "./content";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type WritingCardProps = {
  item: ExpertiseItem;
};

export function WritingCard({ item }: WritingCardProps) {
  return (
    <Card className="writing-card">
      <CardHeader>
        <div className="writing-card__meta">
          <Badge variant="outline">{item.area}</Badge>
          <Badge variant="muted">{item.technologies}</Badge>
        </div>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
