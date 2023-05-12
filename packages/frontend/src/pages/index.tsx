import {Heading, Button} from "@chakra-ui/react";
import {useUser} from "@/context/User"
export default function Home() {
  const {user, updateUser} = useUser()
  return (
    <>
        <Heading>ArtPlace</Heading>
    </>
  )
}
