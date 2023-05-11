import {Heading, Button} from "@chakra-ui/react";
import {useUser }from "../UserContext"
export default function Home() {
  const {user, updateUser} = useUser()
  return (
    <>
        <Heading>ArtPlace</Heading>
        {!user && <button onClick={updateUser}>Click to Login</button>}
        {user && <Heading>{`Logged in as ${user.fullName}`}</Heading>}
    </>
  )
}
