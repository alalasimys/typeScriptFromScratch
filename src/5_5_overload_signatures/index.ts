class User {
  skills: string[];

  addSkill(newSkill: string): void;
  addSkill(newSkills: string[]): void;
  addSkill(newSkillOrSkills: string | string[]): void {
    if (Array.isArray(newSkillOrSkills)) {
      this.skills.concat(newSkillOrSkills);
    } else {
      this.skills.push(newSkillOrSkills);
    }
  }
}

new User().addSkill(['js']);
