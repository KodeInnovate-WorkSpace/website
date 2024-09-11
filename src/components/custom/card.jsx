import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MyCard({
  className,
  price,
  location,
  name,
  bedrooms,
  bathrooms,
  size,
  ...props
}) {
  const contentText = [
    {
      title: "Bathrooms",
      description: bathrooms,
    },
    {
      title: "Bedrooms",
      description: bedrooms,
    },
    {
      title: "Property Size",
      description: size,
    },
  ];

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            {name}
            <p>₹{price}/-</p>
          </div>
        </CardTitle>

        <CardDescription>
          <p>{location}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {contentText.map((item, index) => (
            <div key={index} className="mb-4 pb-4 last:mb-0 last:pb-0">
              <div className="h-8 flex items-center justify-between w-full px-4">
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full h-12 text-lg bg-[#7C4BD2] hover:bg-[#5f2db5]`}
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
