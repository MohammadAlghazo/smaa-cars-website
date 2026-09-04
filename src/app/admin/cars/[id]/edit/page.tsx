import { prisma } from "@/lib/prisma";
import CarEditForm from "@/components/admin/CarEditForm";
import { notFound } from "next/navigation";

export default async function EditCarPage({ params }: { params: { id: string } }) {
  const car = await prisma.car.findUnique({
    where: { id: params.id }
  });

  if (!car) {
    notFound();
  }

  return <CarEditForm car={car} />;
}
