import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface QuestionDrawerProps {
  flashcard: FlashCard;
}

export function QuestionDrawer({ flashcard }: QuestionDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger className="absolute bottom-10 right-10 bg-green-500 w-10 h-10 rounded-full  ">
        <Avatar className="flex items-center justify-center w-full h-full">
          <Check />
        </Avatar>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{flashcard.term}</DrawerTitle>
        </DrawerHeader>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="bg-green-500 text-black">Know It</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button className="bg-red-500">More Practice</Button>
          </DrawerClose>
          <DrawerClose />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
