import { redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {signOut} from "firebase/auth"
import { auth } from "../firebase/Firebase";

// ye this look a bit bad but what r u gonna do ¯\_(ツ)_/¯
export async function action(){
  console.log("logout");
  await signOut(auth);
  return redirect("/smart-printing-service/login");
}