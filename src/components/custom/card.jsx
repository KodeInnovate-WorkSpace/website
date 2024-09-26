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
  id,
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

  const handleClick = () => {
    const whatsappNumber = "9326500602";
    const message = `Hello, I am interested in the property located at ${location}. Here are the details:\n
    - Name: ${name}\n
    - Price: ₹${price}\n
    - Bathrooms: ${bathrooms}\n
    - Bedrooms: ${bedrooms}\n
    - Size: ${size} sq ft`;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <Card className={cn("w-[300px]", className)} {...props}>
      <CardHeader>
        {/* property image */}
        <div className=" w-full h-48 rounded-lg overflow-hidden cursor-pointer">
          <img
            src={
              id <= 5 ? `images/sample${id}.jpg` : "https://placehold.co/400"
            }
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        <CardTitle>
          <div className="flex justify-between mt-4 text-lg">
            {name}
            <p>₹{price}/-</p>
          </div>
        </CardTitle>

        <CardDescription>
          <p className="-mb-9">{location}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {contentText.map((item, index) => (
            <div key={index} className="last:mb-0 last:pb-0">
              <div className="h-8 flex items-center justify-between w-full">
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
          onClick={handleClick}
          className={`w-full h-12 text-lg bg-mainColor hover:bg-secondColor`}
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
