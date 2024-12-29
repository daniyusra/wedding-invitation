const getDisplayName = ({
  to,
  gender,
  married,
  hasPartner,
  nicknameOnly
}: {
  to: string | null;
  gender: string | undefined;
  married: boolean;
  hasPartner: boolean;
  nicknameOnly: boolean | undefined;
}) => {
  if (!to) return undefined;

  if (!gender || gender === "c") return to;

  let target = to?.split("-")[0]?.trim();
  let partnerName = to?.split("-")[1]?.trim();

  if (nicknameOnly){
    target = target.split(" ")[0];
    partnerName = partnerName.split(" ")[0];
  }

  if (gender === "f") {
    target = `${married ? "Mrs." : "Ms."} ${target}`;
  } else {
    target = `Mr. ${target}`;
  }

  if (!partnerName) {
    if (!hasPartner) return target;
    return `${target} & Partner`;
  }

  if (gender === "f") return `Mr. ${partnerName} & ${target}`;

  return `${target} & ${married ? "Mrs." : "Ms."} ${partnerName}`;
};

export { getDisplayName };
