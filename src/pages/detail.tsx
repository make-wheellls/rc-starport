/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-01 03:18:57
 * @LastEditTime: 2023-01-30 23:55:46
 */
import { Link, useParams } from 'react-router-dom'
import FloatProxy from '../components/StarPort/FloatProxy'
import { useState } from 'react'
import React, { memo } from 'react'

const Detail = memo(() => {
  const [size, setSize] = useState(200)
  const params = useParams()
  // console.log(((Number(params.id) + 1) % 12) + '')
  return (
    <>
      <div className='w-full flex flex-col items-center '>
        <div className='my-20px flex justify-center items-center'>
          <div>Current: Detail</div>
          <FloatProxy port='13' w='96px' h='72px' ml='13px' />
        </div>

        <nav flex='~' gap='2'>
          <Link
            to='/'
            className='no-underline px-10px py-5px rounded-md text-white'
            bg='[#4074ba]'
          >
            back
          </Link>
          <button
            className='px-10px py-5px rounded-md text-white'
            border='~'
            bg='[#4074ba]'
            onClick={() => setSize(size + 30)}
          >
            Enlarge
          </button>
        </nav>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <FloatProxy
            port={params.id}
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
          <p flex='1' className='m-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='mt-10 flex <md:(flex-col-reverse items-center) md:(justify-center w-[60%] items-center)'>
          <p flex='1' className='m-10'>
            现代多使用于魔兽世界中，戏称死了以后尸体躺在地上长期不消失的现象。而游戏职业术士作为最容易集火导致死亡的目标，被玩家戏称为“躺尸术”。
            《魔兽世界》中有一位术士ID为爱你就这样，其于游戏版本5.4初期为了去金团消费而买空淘宝金币，因此其得以红极一时。引申意：在集体宿舍中被
            人吵得睡不着觉，在床上干躺着，也称为躺尸，可见宿舍之吵环境之差。其它引申意：形容睡觉睡的死，一动不动的，不管外边有什么情况也不会有什么反应了！
          </p>

          <FloatProxy
            port={(Number(params.id) % 12) + 1 + ''}
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
        </div>
      </div>
    </>
  )
})

export default Detail
