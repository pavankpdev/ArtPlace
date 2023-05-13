import {Heading} from "@chakra-ui/react";
import GET_CHARACTERS from "@/gql/queries/getCharacter";
import { useQuery } from '@apollo/client';

export default function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <>
    <div>
      <h1>Rick and Morty Characters</h1>
      {data.characters.results.map((character: any) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
        </div>
      ))}
    </div>
    </>
  )
}
