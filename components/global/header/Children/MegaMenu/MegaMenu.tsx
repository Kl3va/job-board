import React from 'react';
import Link from 'next/link';
import {
  MegaContainer,
  MegaInner,
  MegaItem,
  MegaItemImage,
  MegaItemContent,
  MegaItemArrow,
  MegaWrap,
} from './MegaMenuStyles';
import { SubMenuTypes } from 'types/menuTypes';

interface MegaMenuTypes {
  OneColumn?: boolean;
  TwoColumns?: boolean;
  ThreeColumns?: boolean;
  menuToggle: boolean;
  data: SubMenuTypes[];
  mobileMenuToggle: boolean;
}

const MegaMenu = ({
  OneColumn,
  TwoColumns,
  ThreeColumns,
  menuToggle,
  data,
  mobileMenuToggle,
}: MegaMenuTypes) => {
  return (
    <MegaContainer menuToggle={menuToggle} mobileMenuToggle={mobileMenuToggle}>
      <MegaWrap>
        <MegaInner
          OneColumn={OneColumn}
          TwoColumns={TwoColumns}
          ThreeColumns={ThreeColumns}
        >
          {data.map((menu) => {
            return (
              <Link href={menu.link} key={menu.id}>
                <a>
                  <MegaItem>
                    <MegaItemImage>
                      <div>
                        <i className={menu.image}></i>
                      </div>
                    </MegaItemImage>
                    <MegaItemContent>
                      <h6>{menu.title}</h6>
                      <p>{menu.text}</p>
                    </MegaItemContent>
                    <MegaItemArrow>
                      <i className='fa-solid fa-arrow-right-long'></i>
                    </MegaItemArrow>
                  </MegaItem>
                </a>
              </Link>
            );
          })}
        </MegaInner>
      </MegaWrap>
    </MegaContainer>
  );
};

export default MegaMenu;
