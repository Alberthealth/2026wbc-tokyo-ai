export interface Player {
  id: string;
  name: string;
  originalName?: string;
  reading?: string;
  position: string;
  team: string;
  nickname: string;
  handedness: string;
}

export interface PopularPlayer extends Player {
  achievements: string;
  chatTopic: string;
  image?: string;
}

export interface TeamSection {
  id: string;
  name: string;
  flag: string;
  color: string;
  players: Player[];
  popularPlayers: PopularPlayer[];
}

export interface CheerMember {
  id: string;
  name: string;
  team: string;
  description: string;
  photo: string;
  instagram?: string;
}

export interface CheerTeam {
  name: string;
  members: CheerMember[];
}

export interface ForumMessage {
  id: string;
  content: string;
  timestamp: number;
  author: string;
}

export interface ForumTab {
  id: string;
  title: string;
  match: string;
}
