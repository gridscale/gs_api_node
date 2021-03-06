

import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './../Specs';
import { IpCreate, IpUpdate } from './../Specs';

interface IP {
    list(_options?: RequestOptions, _callback?: Function): Promise<Omit<ApiResult<models.IpsGetResponse>, 'meta' | 'links'>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.IpGetResponse>>;
    create(_attributes: IpCreate, _callback?: Function): Promise<ApiResult<models.IpCreateResponse>>;
    patch(_uuid: string, _attributes: IpUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}

class IP extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/ips'); }



}

export {IP};

