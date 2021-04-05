export const URL = process.env.API_URL;

/**
 * Defines the url for the API.
 *
 * @constant
 */

const API_ROOT_URL =
	'https://engine.myonepage.com/pi';
const AUTH_URL = `${API_ROOT_URL}/auth/`;
const LOGIN_URL = `${API_ROOT_URL}/login/`;
const SUPER_USER_URL = `${API_ROOT_URL}/superuser/`

const GET_NAME_URL = `${API_ROOT_URL}/guide/`;

/*
    Location routes
*/
const LOCATION_URL = `${API_ROOT_URL}/location/`;
const EDIT_LOCATION_URL = `${API_ROOT_URL}/edit_location/`;
const DELETE_LOCATION_URL = `${API_ROOT_URL}/delete_location/`;


/*
    Category routes
*/
const CATEGORY_URL = `${API_ROOT_URL}/category/`;
const EDIT_CATEGORY_URL = `${API_ROOT_URL}/edit_category/`;
const DELETE_CATEGORY_URL = `${API_ROOT_URL}/delete_category/`;


/*
    Impact routes
*/
const IMPACT_URL = `${API_ROOT_URL}/impact/`;
const EDIT_IMPACT_URL = `${API_ROOT_URL}/edit_impact/`;
const DELETE_IMPACT_URL = `${API_ROOT_URL}/delete_impact/`;


/*
    Analytics
*/
const TYPE_AGGREGATE_URL = `${API_ROOT_URL}/type_aggregate/`;
const LOCATION_AGGREGATE_URL = `${API_ROOT_URL}/location_aggregate/`;
const IMPACT_AGGREGATE_URL = `${API_ROOT_URL}/impact_aggregate/`;
const CATEGORY_AGGREGATE_URL = `${API_ROOT_URL}/category_aggregate/`;
const USER_AGGREGATE_URL = `${API_ROOT_URL}/user_aggregate/`;
const REPORT_AGGREGATE_URL = `${API_ROOT_URL}/report_aggregate/`;
const SUPERUSER_SORT_URL = `${API_ROOT_URL}/superuser_sort/`;
const SORT_URL = `${API_ROOT_URL}/sort/`;
const MY_REPORT_AGGREGATE_URL = `${API_ROOT_URL}/my_report_aggregate/`;

/*
    Report routes
*/
const REPORT_URL = `${API_ROOT_URL}/report/`;


/*
    Admin routes
*/
const LGA_URL = `${API_ROOT_URL}/lgas/`;
const ADMIN_URL = `${API_ROOT_URL}/admin/`;
const WARD_URL = `${API_ROOT_URL}/ward/`;
const POLLING_UNIT_URL = `${API_ROOT_URL}/pollingunits/`;

/*
    User routes
*/
const USER_URL = `${API_ROOT_URL}/user/`;

const GUIDE_URL = `${API_ROOT_URL}/guide/`;
const NEW_GUIDE_URL = `${API_ROOT_URL}/new_guide/`;
const EDIT_GUIDE_URL = `${API_ROOT_URL}/edit_guide/`;
const DELETE_GUIDE_URL = `${API_ROOT_URL}/delete_guide/`;



/*
   Image routes
*/
const IMAGE_URL = `${API_ROOT_URL}/image/`;
const DELETE_IMAGE_URL = `${API_ROOT_URL}/delete_image/`;

/*
   Miss routes
*/
const MISS_URL = `${API_ROOT_URL}/record_miss/`;
const DELETE_MISS_URL = `${API_ROOT_URL}/delete_miss/`;

const IMG_PATH_URL = 'http://159.65.201.173';
const ROOT_PATH_URL = 'http://obuntu.community';

/*
    Other routes
*/

export {
    AUTH_URL,
    LOGIN_URL,
    SUPER_USER_URL,
    LOCATION_URL,
    USER_URL,
    USER_AGGREGATE_URL,
    TYPE_AGGREGATE_URL,
    LOCATION_AGGREGATE_URL,
    IMPACT_AGGREGATE_URL,
    CATEGORY_AGGREGATE_URL,
    REPORT_AGGREGATE_URL,
    SUPERUSER_SORT_URL,
    SORT_URL,
    MY_REPORT_AGGREGATE_URL,
    CATEGORY_URL,
    EDIT_CATEGORY_URL,
    DELETE_CATEGORY_URL,
    IMPACT_URL,
    EDIT_IMPACT_URL,
    DELETE_IMPACT_URL,
    WARD_URL,
    POLLING_UNIT_URL,
    GET_NAME_URL,
    GUIDE_URL,
    ADMIN_URL,
    LGA_URL,
    NEW_GUIDE_URL,
    EDIT_GUIDE_URL,
    DELETE_GUIDE_URL,
    EDIT_LOCATION_URL,
    DELETE_LOCATION_URL,
    IMAGE_URL,
    DELETE_IMAGE_URL,
    IMG_PATH_URL,
    ROOT_PATH_URL,
    MISS_URL,
    DELETE_MISS_URL,
    REPORT_URL
};
