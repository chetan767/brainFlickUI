import axios from "axios";
import { getApiBaseUrl } from "src/constants/flavour";

export async function brainPostAPI(data, path) {
  return axios
    .post(
      getApiBaseUrl() + path,
      { ...data },
      {
        headers: {},
      }
    )
    .then((res) => {
      if (res.data.success == false) {
        return { error: true };
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return { error: true };
    });
}

export async function brainGetAPI(path) {
  return axios
    .get(getApiBaseUrl() + path, {
      headers: {},
    })
    .then((res) => {
      if (res.data.success == false) {
        return { error: true };
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return { error: true };
    });
}
