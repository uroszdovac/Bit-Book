class UserProfile {
    constructor(userId, name, email, aboutShort, about, avatar, postsCount, commentsCount) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.aboutShort = aboutShort;
        this.about = about;
        this.avatar = avatar;
        this.postsCount = postsCount;
        this.commentsCount = commentsCount;
    }
}

export default UserProfile;
