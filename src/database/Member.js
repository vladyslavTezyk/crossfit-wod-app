import DB from "./db.json" with { type: "json" };
import { saveToDatabase } from "./utils.js";

function getAllMembers(filterParams) {
  try {
    let members = DB.members;
    if (filterParams.gender) {
      return members.filter((member) =>
        member.gender.toLocaleLowerCase().includes(filterParams.gender)
      );
    }
    return DB.members;
  } catch (error) {
    throw { status: 500, message: error };
  }
}

function getOneMember(memberId) {
  try {
    const member = DB.members.find((member) => member.id === memberId);
    if (!member) {
      throw {
        status: 400,
        message: `Can't find member with the id ${memberId}`,
      };
    }
    return member;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
}

function createNewMemeber(newMember) {
  try {
    const isAlreadyAdded =
      DB.members.findIndex((member) => member.email === newMember.email) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Member with the email ${newMember.email} already exists`,
      };
    }
    DB.members.push(newMember);
    saveToDatabase(DB);
    return newMember;
  } catch (error) {
    throw { status: error?.status || 500, message: error.message || error };
  }
}

function updateOneMember(memberId, changes) {
  try {
    const indexForUpdate = DB.members.findIndex(
      (member) => member.id === memberId
    );

    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find member with the id ${memberId}`,
      };
    }

    const updatedMember = {
      ...DB.members[indexForUpdate],
      ...changes,
    };

    DB.members[indexForUpdate] = updatedMember;
    saveToDatabase(DB);
    return updatedMember;
  } catch (error) {
    throw { status: error?.status || 500, message: error.message || error };
  }
}

function deleteOneMember(memberId) {
  try {
    const indexForDeletion = DB.members.findIndex(
      (member) => member.id === memberId
    );

    if (indexForDeletion === -1) {
      if (indexForDeletion === -1) {
        throw {
          status: 400,
          message: `Can't find member with the id ${memberId}`,
        };
      }
    }

    DB.members.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error.message || error };
  }
}

export default {
  getAllMembers,
  getOneMember,
  createNewMemeber,
  updateOneMember,
  deleteOneMember,
};
