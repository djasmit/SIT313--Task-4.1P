import { faker } from '@faker-js/faker';

const customerList = [];

var count = 9;
for (var i = 0; i < count; i++) {
    customerList.push({
        "key": i,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "description": faker.person.bio()
    });
};

export default customerList;