
import { getSession } from "@/lib/auth/server";
import {EventDetailContent} from "@/components/event-detail-content";
import { redirect } from "next/navigation";

export default  async function EventDetailsPage({
    params,
}:{
    params: Promise<{eventId: string}>;
}){

    const {eventId} = await params;

    const session = await getSession();

    if (!session.data) {
        redirect("/sign-in");
    }

    return <EventDetailContent userId ={session.data.user.id} eventId={eventId}/>
}