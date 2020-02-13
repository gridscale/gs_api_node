import { Marketplace } from './Objects/Marketplace';


import { api } from './api';

import { Server } from './Objects/Server';
import { Storage } from './Objects/Storage';
import { Network } from './Objects/Network';
import { IP } from './Objects/IP';
import { ISOImage } from './Objects/ISOImage';
import { SSHKey } from './Objects/SSHKey';
import { Template } from './Objects/Template';
import { Location } from './Objects/Location';
import { ObjectStorage } from './Objects/ObjectStorage';
import { Label } from './Objects/Label';
import { Price } from './Objects/Price';
import { Loadbalancer } from './Objects/Loadbalancer';
import { Events } from './Objects/Events';
import { Firewall } from './Objects/Firewall';
import { PAAS } from './Objects/PAAS';
import { Deleted } from './Objects/Deleted';
import { PAASServiceTemplate } from './Objects/PAASServiceTemplate';
import { PAASService } from './Objects/PAASService';
import { PAASSecurityZone } from './Objects/PAASSecurityZone';
import { PAASServiceMetrics } from './Objects/PAASServiceMetrics';

/**
 * generate Client Class for all Connections
 * test
 */
class GridscaleClient {

    // Types
    public Server: any;
    public Storage: any;
    public Network: any;
    public IP: any;
    public ISOImage: any;
    public SSHKey: any;
    public Template: any;
    public Location: any;
    public ObjectStorage: any;
    public Label: any;
    public Price: any;
    public Loadbalancer: any;
    public Events: any;
    public Firewall: any;
    public PAAS: any;
    public PAASService: any;
    public PAASServiceTemplate: any;
    public PAASSecurityZone: any;
    public Deleted: any;
    public Marketplace: any;

    public watchRequest: Function;

    /**
     * Init Client with Default Values
     *
     *
     * @param _token Security Token
     * @param _userId UUID of User
     * @param _options
     */
    constructor(_token, _userId, _options = {}) {

        // Store Security Tokens
        api.storeToken(_token, _userId);

        // Store advanced Options
        api.setOptions(_options);

        // Call Subtypes
        this.Server = new Server(api);
        this.Storage = new Storage(api);
        this.Network = new Network(api);
        this.IP = new IP(api);
        this.ISOImage = new ISOImage(api);
        this.SSHKey = new SSHKey(api);
        this.Template = new Template(api);
        this.Location = new Location(api);
        this.ObjectStorage = new ObjectStorage(api);
        this.Label = new Label(api);
        this.Price = new Price(api);
        this.Loadbalancer = new Loadbalancer(api);
        this.Events = new Events(api);
        this.Firewall = new Firewall(api);
        this.PAAS = new PAAS(api);
        this.PAASServiceTemplate = new PAASServiceTemplate(api);
        this.PAASService = new PAASService(api);
        this.PAASSecurityZone = new PAASSecurityZone(api);
        this.Deleted = new Deleted(api);
        this.Marketplace = new Marketplace(api);
        this.watchRequest = api.watchRequest;

    }

    public setToken (_token: string, _userId: string) {
      api.storeToken(_token, _userId);
    }

    public setEndpoint(_endpoint: string) {
      api.setOptions({ endpoint: _endpoint });
    }


    public addLogger ( _callback ) {
      api.addLogger( _callback );
    }

    public PAASServiceMetrics(_serviceUUID) {
      return new PAASServiceMetrics(api, _serviceUUID);
    }

    public stringifyResponseRequest(object: Response | Request): any {
      var tmp = {};
      for (var x in object) {
        if (object[x] instanceof Headers) {
          tmp[x] = {};

          object[x].forEach((_h, _k) => {
            tmp[x][_k] = _h;
          });

        } else if (object[x] instanceof Request) {
          tmp[x] = this.stringifyResponseRequest(object[x]); 

        } else if (['string', 'number', 'object', 'boolean'].indexOf(typeof (object[x])) >= 0) {
          tmp[x] = object[x];
        }
      }

      return tmp;
    }

}

export { GridscaleClient as Client }
