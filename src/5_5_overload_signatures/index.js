"use strict";
class User {
    addSkill(newSkillOrSkills) {
        if (Array.isArray(newSkillOrSkills)) {
            this.skills.concat(newSkillOrSkills);
        }
        else {
            this.skills.push(newSkillOrSkills);
        }
    }
}
new User().addSkill(['js']);
