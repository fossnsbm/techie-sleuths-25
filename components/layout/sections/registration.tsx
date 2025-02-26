"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react";

type Member = {
   name: string;
   studentId: string;
};


export const RegistrationSection = () => {
   const [teamName, setTeamName] = useState("");
   const [leaderName, setLeaderName] = useState("");
   const [leaderContact, setLeaderContact] = useState("");
   const [leaderSid, setLeaderSid] = useState("");
   const [leaderEmail, setLeaderEmail] = useState("");

   const [memberOne, setMemberOne] = useState<Member>({ name: "", studentId: "" });
   const [memberTwo, setMemberTwo] = useState<Member>({ name: "", studentId: "" });
   const [memberThree, setMemberThree] = useState<Member>({ name: "", studentId: "" });

   // TODO: add UI for error and pending
   const [error, setError] = useState("");
   const [pending, setPending] = useState(false);

   async function submit() {
      if ((memberOne.name == "" || memberOne.studentId == "") &&
        (memberTwo.name == "" || memberTwo.studentId == "") &&
        (memberThree.name == "" || memberThree.studentId == "")) {
        setError("At-least 03 members are required");
        return;
      }

      if (teamName == "" || leaderName == "" || leaderContact == "" || leaderSid == "" || leaderEmail == "") {
        setError("Please fill in all required fields");
        return;
      }

      //TODO: more validation

      const leader = {
        name: leaderName,
        contactNo: leaderContact,
        studentId: leaderSid,
        email: leaderEmail,
      };

      const members = [
        memberOne,
        memberTwo,
      ];

      if (memberThree.name != "" && memberThree.studentId != "") {
        members.push(memberThree);
      }

      try {
        setPending(true);
        await addDoc(collection(db, "teams"), {
           name: teamName,
           leader,
           members,
        })
        setPending(false);
      } catch (e) {
        console.error(e);
        setError(e != null && e.toString && e.toString() || "Unknown error");
        setPending(false);
      }
   }

   return (
      <section id="register" className="container py-2 md:py-32 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           <div className="flex justify-center relative">
              <Image
                src="/ha.png"
                alt="Register for the Competition"
                width={500}
                height={500}
                className="rounded-lg shadow-lg opacity-80 hover:opacity-90"
              />
              <div className="absolute bottom-2 lg:top-96 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-32 bg-primary/50 rounded-full blur-3xl"></div>
           </div>
           <Card className="w-full bg-muted/60 dark:bg-card">
              <CardHeader className="text-primary text-[2.230rem] text-center">
                Register
              </CardHeader>
              <CardContent>
                <form className="grid w-full gap-4 text-xl">
                   <div className="flex flex-col gap-4">
                      <Input
                        type="text"
                        placeholder="Team name"
                        className="text-lg"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                      />
                      <Input
                        type="text"
                        placeholder="Leader's name"
                        className="text-lg"
                        value={leaderName}
                        onChange={(e) => setLeaderName(e.target.value)}
                      />
                      <Input
                        type="tel"
                        placeholder="Leader's Contact No."
                        className="text-lg"
                        value={leaderContact}
                        onChange={(e) => setLeaderContact(e.target.value)}
                      />
                      <Input
                        type="number"
                        placeholder="Leader's SID"
                        className="text-lg"
                        value={leaderSid}
                        onChange={(e) => setLeaderSid(e.target.value)}
                      />
                      <Input
                        type="email"
                        placeholder="Leader's Email"
                        className="text-lg"
                        value={leaderEmail}
                        onChange={(e) => setLeaderEmail(e.target.value)}
                      />
                   </div>
                   <div>
                     <h4 className="text-2xl mt-4">Member Information</h4>
                     <i className="text-base">at-least 02 members required</i>
                   </div>
                   <div className="grid lg:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-4">
                       <Input
                          type="text"
                          placeholder="Name (Member 1)"
                          className="text-lg"
                          value={memberOne.name}
                          onChange={(e) => setMemberOne({ name: e.target.value, studentId: memberOne.studentId })}
                       />
                       <Input
                          type="number"
                          placeholder="Student ID (Member 1)"
                          className="text-lg"
                          value={memberOne.studentId}
                          onChange={(e) => setMemberOne({ name: memberOne.name, studentId: e.target.value })}
                       />
                    </div>
                    <div className="flex flex-col gap-4">
                       <Input
                          type="text"
                          placeholder="Name (Member 2)"
                          className="text-lg"
                          value={memberTwo.name}
                          onChange={(e) => setMemberTwo({ name: e.target.value, studentId: memberTwo.studentId })}
                       />
                       <Input
                          type="number"
                          placeholder="Student ID (Member 2)"
                          className="text-lg"
                          value={memberTwo.studentId}
                          onChange={(e) => setMemberTwo({ name: memberTwo.name, studentId: e.target.value })}
                       />
                    </div>
                    <div className="flex flex-col gap-4">
                       <Input
                          type="text"
                          placeholder="Name (Member 3)"
                          className="text-lg"
                          value={memberThree.name}
                          onChange={(e) => setMemberThree({ name: e.target.value, studentId: memberThree.studentId })}
                       />
                       <Input
                          type="number"
                          placeholder="Student ID (Member 3)"
                          className="text-lg"
                          value={memberThree.studentId}
                          onChange={(e) => setMemberThree({ name: memberThree.name, studentId: e.target.value })}
                       />
                    </div>
                   </div>
                   <Button className="w-full font-bold text-2xl mt-4" onClick={submit}>Register</Button>
                </form>
              </CardContent>
           </Card>
        </div>
    </section>
   );
};
