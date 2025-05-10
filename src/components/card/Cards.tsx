import React from "react";
import { Avatar, Button, Card, Image, Stack, Text } from "@chakra-ui/react";
import { topics } from "../../Constants/topics.ts";

const Cards = () => {
  return (
    <div className="flex justify-center flex-wrap items-center mt-4 pt-4">
      {topics.map((item) => (
        <div className="mx-8 px-8 my-4 py-4">
          <Stack gap="4" direction="row" wrap="wrap">
            <Card.Root
              maxW="sm"
              overflow="hidden"
              className="transform transition duration-300 hover:scale-105"
            >
              <div className="bg-black h-[275px] w-[275px]">
                <Image
                  src={item.img}
                  //   width={275}
                  //   height={275}
                  alt={item.subject}
                  className="object-cover w-full h-full"
                />
              </div>
              <Card.Body gap="2">
                <Card.Title className="text-center">{item.subject}</Card.Title>
                {/* <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description> */}
                {/* <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text> */}
              </Card.Body>
              <Card.Footer className="flex justify-center" gap="2">
                <Button variant="solid">View now</Button>
                {/* <Button variant="ghost">Add to cart</Button> */}
              </Card.Footer>
            </Card.Root>
          </Stack>
        </div>
      ))}
    </div>
  );
};

export default Cards;
