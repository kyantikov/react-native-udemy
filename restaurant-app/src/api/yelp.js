import axios from 'axios';

const API_KEY = 't_EdRAWX61Qk9QAvQxm0upQAW7zF6UHfekqgyeWm2I-JMa4ulQspQu8YPfd0JGvkYlu3JDFNPrG2uLZvt9fewBTz-S6HqT_5bfRFs6xJ3HwbwxVGVvf5pO60x_YDX3Yx'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
