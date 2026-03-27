"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/semd-email";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: ContactFormData) {
    setLoading(true);
    try {
      await sendEmail(data);
      alert("Message sent Successfully");
      reset();
    } catch (error) {
      alert("Failed to send the message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@domain.com"
          {...register("email", { required: true })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Type your message"
          className="min-h-[120px]"
          {...register("message", { required: true })}
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <span>Submitting...</span>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit
          </>
        )}
      </Button>
    </form>
  );
};

export default Contact;