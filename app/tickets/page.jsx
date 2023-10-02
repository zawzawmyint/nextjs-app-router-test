import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";
const Tickets = async () => {
  return (
    <main>
      <nav>
        <div className="min-w-full">
          <div className="flex justify-between">
            <h2>Tickets</h2>
            <Link href={"/tickets/create"}>
              <button className="btn-primary w-36 flex justify-center">
                Add New
              </button>
            </Link>
          </div>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>

      {/* only will rerender that is wrapped by the suspense  */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
