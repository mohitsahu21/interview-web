import { Button, Card,Stack } from "@chakra-ui/react";
import { topics } from "../../Constants/topics.tsx";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-wrap items-center mt-4 pt-4">
      {topics.map((item) => (
        <div
          key={item.id}
          className="mx-4 px-4 my-2 py-2 sm:mx-6 sm:px-6 md:mx-8 md:px-8"
        >
          <Stack gap="4" direction="row" wrap="wrap">
            <Card.Root
              maxW="sm"
              overflow="hidden"
              className="transform transition duration-300 hover:scale-105"
            >
              <div className="w-60 h-60 ">
                {/* <Image
                  src={item.img}
                  //   width={275}
                  //   height={275}
                  alt={item.subject}
                  className="object-cover w-full h-full"
                /> */}
                {/* <FaReact className="w-full h-full p-2"/> */}
                {item.img}


              </div>
              <Card.Body gap="2" className="p-1 mb-1">
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
                <Button onClick={() => navigate(item.path)} variant="solid">
                  View now
                </Button>
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
