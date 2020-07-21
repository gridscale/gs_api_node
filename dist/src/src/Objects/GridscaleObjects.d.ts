import { APIClass, ApiResult, GenericApiResult, RequestOptions, VoidApiResult, CreateResult } from '../api';
import { EventResponse } from './model/models';
declare class GridscaleObjects {
    _api: APIClass;
    _defaults: RequestOptions;
    _basepath: string;
    /**
     * Create Object Endpoint
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api: APIClass, _path: string);
    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    setDefaults(_options: RequestOptions): void;
    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {RequestOptions}
     * @private
     */
    _buildRequestOptions(_options?: RequestOptions): RequestOptions;
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     */
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    remove(_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Create object
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<CreateResult>>}
     */
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<CreateResult>>;
    /**
     * Patch object
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patch(_uuid: string, _attributes: Object, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Wrapper for Subtypes to save some lines of code
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    _sub(_type: string, _uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Get Single Sub Object by UUID
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @private
     */
    _sub_get(_type: string, _uuid: string, _sub_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Post to Subtype ob Object
     *
     * @param _type
     * @param _uuid
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_post(_type: string, _uuid: string, _attributes: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Patch Subobject
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_patch(_type: string, _uuid: string, _sub_uuid: string, _attributes: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Remove Sub Type from Object
     *
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_remove(_type: string, _uuid: string, _sub_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     *  Get Events for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    events(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<EventResponse>>;
}
export { GridscaleObjects };
