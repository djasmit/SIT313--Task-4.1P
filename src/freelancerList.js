import { faker } from '@faker-js/faker';

const freelancerList = [];

var count = 3;
for (var i = 0; i < count; i++) {
    freelancerList.push({
        "key": i,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobType(),
        "rating": Math.floor(Math.random() * 6)
    });
};

export default freelancerList;