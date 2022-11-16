interface Certificate {
  id: string;
  title: string;
  event: string;
  name: string;
  duration: string;
}

export function instanceOfCertificate(object: any): object is Certificate {
  return (
    typeof object === "object" &&
    typeof object.id === "string" &&
    typeof object.title === "string" &&
    typeof object.event === "string" &&
    typeof object.name === "string" &&
    typeof object.duration === "string"
  );
}

export default Certificate;
