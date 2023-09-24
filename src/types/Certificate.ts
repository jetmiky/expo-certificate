interface Certificate {
  id: string;
  name: string;
  title: string;
  role: string;
  duration: string;
  date: string;
  event: string;
}

export function instanceOfCertificate(object: any): object is Certificate {
  return (
    typeof object === "object" &&
    typeof object.id === "string" &&
    typeof object.name === "string" &&
    typeof object.title === "string" &&
    typeof object.role === "string" &&
    typeof object.duration === "string" &&
    typeof object.date === "string" &&
    typeof object.event === "string"
  );
}

export default Certificate;
