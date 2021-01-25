import { PaasServiceTemplate } from './PaasServiceTemplate';
import { PaasSecurityZone } from './PaasSecurityZone';
import { PaasService } from './PaasService';
import { APIClass } from '../api';

/**
 * this class is only a wrapper to the PaasService, PaasServiceTemplate and PaasSecurityZone classes, due to historical reasons...
 */
class PAAS {
    constructor(private _api: APIClass) { }

    serviceTemplates = new PaasServiceTemplate(this._api);
    securityZones = new PaasSecurityZone(this._api);
    services = new PaasService(this._api);

}

export { PAAS };
