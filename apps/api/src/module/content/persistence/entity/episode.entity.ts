import { DefaultEntity } from '@src/shared/module/persistence/typeorm/entity/default.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Thumbnail } from './thumbnail.entity';
import { TvShow } from './tv-show.entity';
import { Video } from './video.entity';

@Entity('Episode')
export class Episode extends DefaultEntity<Episode> {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  season: number;

  @Column()
  number: number;

  @Column()
  tvShowId: string;

  @ManyToOne(() => TvShow, (tvShow) => tvShow.episodes)
  tvShow: TvShow;

  @OneToOne(() => Thumbnail)
  @JoinColumn()
  thumbnail: Thumbnail | null;

  @OneToOne(() => Video, (video) => video.episode, {
    cascade: true,
    nullable: false,
  })
  video: Video;
}
