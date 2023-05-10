import { HttpProbe } from "./http-probe.model";
import { TcpProbe } from "./tcp-probe.model";

export class HealthCheck {
    periodSeconds:       number = 0;
    timeoutSeconds:      number = 0;
    failureThreshold:    number = 0;
    successThreshold:    number = 0;
    httpGet:          HttpProbe = new HttpProbe;
    tcpSocket:         TcpProbe = new TcpProbe;
}
