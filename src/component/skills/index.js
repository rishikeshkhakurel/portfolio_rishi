import React from 'react'
import TitleButton from './title-button'
import SkillsStyle from './skills-style'
import SkillButton from './skill-button'
import JS from '../../common/assets/js.png'
import TS from '../../common/assets/ts.png'
import ReactLogo from '../../common/assets/react.png'
import Figma from '../../common/assets/figma.png'
import Node from '../../common/assets/node.png'
import Mongo from '../../common/assets/mongo.png'
import Mysql from '../../common/assets/mysql.png'
import Git from '../../common/assets/git.png'
import Linux from '../../common/assets/linux.png'

const Skills = () => {
    return (
        <SkillsStyle>
            <div id="title">
                <TitleButton>SKILLS</TitleButton>
            </div>
            <div id="skill-list">
                    <SkillButton name="JAVASCRIPT" image={JS} />
                    <SkillButton name="TYPESCRIPT" image={TS} />
                    <SkillButton name="REACT" image={ReactLogo} />
                    <SkillButton name="FIGMA" image={Figma} />
                    <SkillButton name="NODE" image={Node} />
                    <SkillButton name="MONGO" image={Mongo} />
                    <SkillButton name="MySQL" image={Mysql} />
                    <SkillButton name="GIT" image={Git} />
                    <SkillButton name="LINUX" image={Linux} />
            </div>
        </SkillsStyle>
    )
}

export default Skills