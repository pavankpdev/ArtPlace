import {Heading, Button} from "@chakra-ui/react";
import {useUser }from "../UserContext"
export default function Home() {
  const {user, updateUser} = useUser()
  return (
    <>
        <Heading>ArtPlace</Heading>
        <button onClick={updateUser}>Login</button>
        <Heading>{!user?"Login": `Logged in as ${user.fullName}`}</Heading>
    </>
  )
}
