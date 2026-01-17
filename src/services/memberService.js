import { v4 } from "uuid";
import Member from "../database/Member.js";

function getAllMembers(filterParams) {
  try {
    const members = Member.getAllMembers(filterParams);
    return members;
  } catch (error) {
    throw error;
  }
}

function getOneMember(memberId) {
  try {
    const member = Member.getOneMember(memberId);
    return member;
  } catch (error) {
    throw error;
  }
}

function updateOneMember(memberId, changes) {
  try {
    const updatedMember = Member.updateOneMember(memberId, changes);
    return updatedMember;
  } catch (error) {
    throw error;
  }
}

function deleteOneMember(memberId) {
  try {
    Workout.deleteOneMember(memberId);
  } catch (error) {
    throw error;
  }
}

export default {
  getAllMembers,
  getOneMember,
  updateOneMember,
  deleteOneMember,
};
