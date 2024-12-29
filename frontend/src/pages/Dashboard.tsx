import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import resumeTemplates from "@/assets/data/testData";
import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTemplates = resumeTemplates.filter((template) =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  return (
    <div className="h-full grid grid-rows-[2rem_1fr]">
      <div className="search-bar p-5">
        <Input 
          id="Search" 
          placeholder="Search your template" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ScrollArea className="w-full h-[calc(100vh-9rem)] mt-10 px-5">
        <div className="grid grid-cols-3 gap-2">
          {filteredTemplates.map((item) => (
            <Card
              key={item.id}
              className="w-auto hover:bg-neutral-800 cursor-pointer"
              onClick={() => window.location.href = `/templates/${item.id}`}
            >
              <CardContent className="text-neutral-600 p-10">
                <img 
                  src={`/thumbnails/template-${item.id}.png`} 
                  alt={`Image not found for ${item.name}`}
                />
              </CardContent>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Dashboard;