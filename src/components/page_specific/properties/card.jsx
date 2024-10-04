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
import useWhatsApp from "@/hooks/useWhatsApp";
import { useCursor } from "@/context/cursor.context";

export function MyCard({
  className,
  id,
  img,
  price,
  location,
  name,
  bedrooms,
  bathrooms,
  size,
  tag,
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
    const message = `Hello, I am interested in the property located at ${location}. Here are the details:\n
    - Name: ${name}\n
    - Price: ₹${price}\n
    - Bathrooms: ${bathrooms}\n
    - Bedrooms: ${bedrooms}\n
    - Size: ${size} sq ft`;

    const sendWhatsAppMessage = useWhatsApp(message);
    sendWhatsAppMessage();
  };
  const { blendMouseEnter, mouseLeave } = useCursor();

  return (
    <Card className={cn("w-[300px]", className)} {...props}>
      <CardHeader>
        {/* tag */}
        <div className="absolute bg-slate-700 text-white px-2 text-sm rounded-sm m-4">
          <p>{tag}</p>
        </div>

        {/* property image */}
        <div className=" w-full h-48 rounded-lg overflow-hidden cursor-pointer">
          <img
            src={img}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>

{/* name & price */}
        <CardTitle>
          <div className="flex justify-between mt-4 text-lg">
            {name}
            <p>₹{price}/-</p>
          </div>
        </CardTitle>

        <CardDescription>
          <p className="-mb-9">
            {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}
          </p>
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
          onMouseEnter={blendMouseEnter}
          onMouseLeave={mouseLeave}
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
