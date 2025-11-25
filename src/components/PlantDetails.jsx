
"use client";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { plantData } from "@/assets/plantData";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function PlantDetails() {
  const { item } = useParams();
  const [open, setOpen] = useState(false);

  const plant = plantData[item?.toLowerCase()];
  if (!plant) return <div className="text-center mt-10 text-red-600">Plant not found</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl  text-center ">
          OUR PRODUCTS
        </h2>
        <p className="text-center mb-4 text-gray-500">We devote all of our experience and efforts for creation</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plant.map((plantItem, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={plantItem.image}
              alt={item}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-center capitalize">{plantItem.name}</h2>
                <p className="text-gray-700 text-sm">{plantItem.description}</p>
              </div>
              <div className="mt-4">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-green-500 hover:bg-green-800">
                      Inquiry for Purchase
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <div className="flex justify-between items-start">
                      <DialogHeader>
                        <DialogTitle>Inquiry Form</DialogTitle>
                        <DialogDescription>
                          Fill in the details below and we'll get back to you.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogClose asChild>
                        <button className="text-gray-500 hover:text-gray-700">
                        </button>
                      </DialogClose>
                    </div>
                    <form className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="name" className='mb-2'>Plant Name</Label>
                        <Input id="name" value={plantItem.name} readOnly />
                      </div>
                      <div>
                        <Label htmlFor="category" className='mb-2'>Category</Label>
                        <Input id="category" value={item} readOnly />
                      </div>
                      <div>
                        <Label htmlFor="email"className='mb-2' >Your Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="message" className='mb-2'>Message</Label>
                        <textarea
                          id="message"
                          className="w-full border rounded-md p-2 text-sm"
                          rows={3}
                          placeholder="Write your inquiry..."
                        />
                      </div>
                      <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                        Submit Inquiry
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
