import {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
} from "./styled";

interface ChallengeCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function ChallengeCard({ description, image, title, link }: ChallengeCardProps) {
  return (
    <Card href={link}>
      <CardImage src={image} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default ChallengeCard;
