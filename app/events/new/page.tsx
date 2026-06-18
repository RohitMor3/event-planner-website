import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormField, FormMessage} from "@/components/ui/form";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {createEventAction} from "@/lib/actions/events";


export default async function NewEventPage(){
    return <div className="mx-auto w-full max-w-2xl"> 
    <Card>
        <CardHeader>
        <CardTitle>
            Create Event
        </CardTitle>
        </CardHeader>
        <CardContent>
        <Form action={createEventAction}>
            <FormField>
            <Label>Title</Label>
            <Input 
                id="title" 
                name="title" 
                placeholder="team dinner" />
            </FormField>
            <FormField>
            <Label htmlFor="description">Description</Label>
            <Textarea 
                id="description" 
                name="description" 
                placeholder="optional event about event" />
            </FormField>
            <FormField>
            <Label htmlFor="location">Location</Label>
            <Input 
                id="location" 
                name="location" 
                placeholder="optional location" />
            </FormField>
            <FormField>
            <Label htmlFor="eventDate">Date and Time</Label>
            <Input 
                id="eventDate" 
                name="eventDate" 
                type="datetime-local" />
                <FormMessage>optional, you can set it later</FormMessage>
            </FormField>
            <div className="flex items-center gap-3">
                <Button type="submit">
                    create event
                </Button>
                <Button type="button" variant="outline" asChild>
                    <Link href={"/dashboard"}>cancel</Link>
                </Button>
            </div>
        </Form>
        </CardContent>
    </Card> 
     </div>
}