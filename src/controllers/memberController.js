import memberService from "../services/memberService.js";

function getAllMembers(req, res) {
  const { mode } = req.query;
  try {
    const allMembers = memberService.getAllMembers({ mode });
    res.send({ status: "OK", data: allMembers });
  } catch (error) {
    res.status(error?.message || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
}

function getOneMember(req, res) {
  const { memberId } = req.params;
  if (!memberId) {
    res.status(400).send({
      status: "FAILED",
      message: "Parameter memberId can not be empty",
    });
    return;
  }
  try {
    const member = memberService.getOneMember(memberId);
    res.status(200).send({ status: "OK", data: member });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { erorr: error?.message || error } });
  }
}

function updateOneMember(req, res) {
  const {
    params: { memberId },
    body,
  } = req;
  if (!memberId || memberId != body.id) {
    res.status(400).send({
      status: "FAILED",
      message:
        "Parameter memberId can not be empty or different from payload id",
    });
    return;
  }
  try {
    const updatedMember = memberService.updateOneMember(memberId, body);
    res.status(200).send({ status: "OK", data: updatedMember });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

function deleteOneMember(req, res) {
  const { memberId } = req.params;
  if (!memberId) {
    res.status(400).send({
      status: "FAILED",
      message:
        "Parameter memberId can not be empty or different from payload id",
    });
    return;
  }
  try {
    memberService.deleteOneMember(memberId);
    res.status(204).send();
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

export default {
  getAllMembers,
  getOneMember,
  updateOneMember,
  deleteOneMember,
};
