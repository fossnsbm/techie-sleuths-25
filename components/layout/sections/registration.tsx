"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore"
import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Check, Loader, X } from "lucide-react";

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

   const [error, setError] = useState("");
   const [pending, setPending] = useState(false);

   const hasTimedOut = useMemo(() => {
        let diff = new Date("2025-03-04T00:00:00").getTime() - Date.now();
        return diff <= 0;
   }, []);


   async function submit() {
      if (teamName == "" || leaderName == "" || leaderContact == "" || leaderSid == "" || leaderEmail == "") {
        setError("Please fill in all required fields");
        return;
      }

      if (leaderEmail.split("@")[1] != "students.nsbm.ac.lk") {
        setError("Please enter your NSBM email address");
        return;
      }

      const members = [];

      if (memberOne.name != "" && memberOne.studentId != "") {
        members.push(memberOne);
      }

      if (memberTwo.name != "" && memberTwo.studentId != "") {
        members.push(memberTwo);
      }

      if (memberThree.name != "" && memberThree.studentId != "") {
        members.push(memberThree);
      }

      if (members.length < 2) {
        setError("At-least 02 members are required");
        return;
      }

      const leader = {
        name: leaderName,
        contactNo: leaderContact,
        studentId: leaderSid,
        email: leaderEmail,
      };

      try {
        setPending(true);
        await addDoc(collection(db, "teams"), {
           name: teamName,
           leader,
           members,
        })
        setPending(false);
        setError("");
        document.getElementById("success")!.showPopover();
      } catch (e) {
        console.error(e);
        setPending(false);
        setError(e != null && e.toString && e.toString() || "Unknown error");
      }
   }

   useEffect(() => {
       if (error) {
        document.getElementById("error")!.showPopover();
       } else {
        document.getElementById("error")!.hidePopover();
       }
   }, [error]);

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
              <CardContent className={hasTimedOut ? "pointer-events-none opacity-50" : ""}>
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
                        type="text"
                        placeholder="Leader's Contact No."
                        className="text-lg"
                        value={leaderContact}
                        onChange={(e) => setLeaderContact(e.target.value.replaceAll(/[^\d+]/g, ""))}
                      />
                      <Input
                        type="text"
                        placeholder="Leader's SID"
                        className="text-lg"
                        value={leaderSid}
                        onChange={(e) => setLeaderSid(e.target.value.replaceAll(/[^\d+]/g, ""))}
                      />
                      <Input
                        type="email"
                        placeholder="Leader's NSBM Email"
                        className="text-lg"
                        value={leaderEmail}
                        onChange={(e) => setLeaderEmail(e.target.value)}
                      />
                   </div>
                   <div>
                     <h4 className="text-2xl mt-4">Member Information</h4>
                   </div>
                   <div className="grid lg:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                       <Input
                          type="text"
                          placeholder="Name (Member 1)"
                          className="text-lg"
                          value={memberOne.name}
                          onChange={(e) => setMemberOne({ name: e.target.value, studentId: memberOne.studentId })}
                       />
                       <Input
                          type="text"
                          placeholder="Student ID (Member 1)"
                          className="text-lg"
                          value={memberOne.studentId}
                          onChange={(e) => setMemberOne({ name: memberOne.name, studentId: e.target.value.replaceAll(/[^\d+]/g, "") })}
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
                          type="text"
                          placeholder="Student ID (Member 2)"
                          className="text-lg"
                          value={memberTwo.studentId}
                          onChange={(e) => setMemberTwo({ name: memberTwo.name, studentId: e.target.value.replaceAll(/[^\d+]/g, "") })}
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
                          type="text"
                          placeholder="Student ID (Member 3)"
                          className="text-lg"
                          value={memberThree.studentId}
                          onChange={(e) => setMemberThree({ name: memberThree.name, studentId: e.target.value.replaceAll(/[^\d+]/g, "") })}
                       />
                    </div>
                   </div>
                 <div className="flex flex-col mt-4">
                     <i className="text-base text-red-400">*At-least 02 members are required.</i>
                     <i className="text-base text-red-400">*Team Leaders should register using their NSBM email.</i>
                 </div>
                   <Button className="w-full font-bold text-2xl mt-4" onClick={submit}>
                    <span>Register</span>
                    {pending && <Loader className="ml-4 animate-spin" />}
                   </Button>
                   <div id="success" className="bg-transparent shadow-lg p-0 backdrop:bg-neutral-800/50" popover="">
                    <Card className="p-4 inline-flex gap-4">
                      <Check/>
                      <span>Thank you for registering!</span>
                    </Card>
                   </div>
                   <div id="error" className="bg-transparent shadow-lg p-0 backdrop:bg-neutral-800/50" popover="">
                    <Card className="p-4 inline-flex gap-4">
                      <AlertTriangle />
                      <span>{error}</span>
                    </Card>
                   </div>
              </CardContent>
           </Card>
        </div>
    </section>
   );
};
