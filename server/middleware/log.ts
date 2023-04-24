import { IncomingMessage, ServerResponse } from "http";

export default defineEventHandler((event) => {
  const req: IncomingMessage = event.node.req;
  const reqHdr = req.headers;
  const reqRuid = reqHdr["x-request-id"] ?? "-";
  const reqSrc = reqHdr["x-forwarded-for"] ?? req.socket.remoteAddress;

  const res: ServerResponse<IncomingMessage> = event.node.res;
  res.setHeader("Via", `${req.httpVersion} mangadex-frontend`);

  res.on("finish", () => {
    console.log(
      `${reqRuid} - ${reqSrc} - "${req.method} ${req.url}" ${res.statusCode}`
    );
  });
});
