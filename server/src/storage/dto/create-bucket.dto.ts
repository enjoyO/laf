import { ApiProperty } from '@nestjs/swagger'
import { BucketPolicy } from '@prisma/client'
import { IsEnum, IsNotEmpty, Matches } from 'class-validator'

export class CreateBucketDto {
  @ApiProperty({
    description: 'The short name of the bucket which not contain the appid',
  })
  @IsNotEmpty()
  @Matches(/^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/)
  shortName: string

  @ApiProperty({
    enum: BucketPolicy,
  })
  @IsEnum(BucketPolicy)
  @IsNotEmpty()
  policy: BucketPolicy

  fullname(appid: string) {
    return `${appid}-${this.shortName}`
  }
}
