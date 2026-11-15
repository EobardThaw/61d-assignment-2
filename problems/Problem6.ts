// Problem 6
import { User } from "../types";

export default verifyUser;
function verifyUser(userData:User|null|undefined):User|string[]{
    const missing: string[] = [];
    if (userData == null) {
        missing.push("userData");
    }

    if (userData?.id == null) {
        missing.push("id");
    }

    if (userData?.name == null) {
        missing.push("name");
    }

    if (userData?.address == null) {
        missing.push("address");
    }

    if (userData?.address?.street == null) {
        missing.push("street");
    }

    if (userData?.address?.city == null) {
        missing.push("city");
    }

    if (userData != null && missing.length === 0) {
        return userData;
    }

    return missing;
}

