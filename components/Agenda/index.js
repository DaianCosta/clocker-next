import { Button } from "@chakra-ui/react";
import firebase from "../../config/firabase";
const logout = () => firebase.auth().signOut();

export const Agenda = () => {
  return <Button onClick={logout}>Sair</Button>;
};
