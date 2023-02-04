import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex home-bg">
        <div className='d-flex flex-dir-custom'>
          {/* First Section */}
          <div className='text-white first-section-bg'>
            <ul className='list-group-item text-center ms-2 me-5 pt-2'>
              <li><i className='fa-brands fa-discord mb-2 li-icon-custom'></i></li>
              <li><i className='fa-solid fa-user-group mb-2 li-icon-user-custom'></i></li>
              <li><i className='fa fa-user-circle border mb-2 li-circle-icon-custom'></i></li>
              <li><i className='fa-solid fa-user-group mb-2 icon-usergroup'></i></li>
              <li><i className='fa-sharp fa-solid fa-s mb-2 text-sharp-solid-custom'></i></li>
              <li className='mb-2 test pt-3'><b className='text-icon-custom'>R</b></li>
              <li className='mb-2 test pt-4'><b className='text-icon-custom'>as</b></li>
              <li className='pt-3'><i className='fa fa-user-circle border mb-2 li-circle-icon-custom'></i></li>
              <li><i className="fa-solid fa-chess-knight border mb-2 li-circle-icon-custom"></i></li>
              <li><i className='fa-solid fa-plus mb-2 down-icon-custom'></i></li>
              <li><i className='fa-solid fa-compass mb-2 down-icon-custom'></i></li>
              <li><i className='fa-solid fa-down-long mb-2 down-icon-custom'></i></li>
            </ul>
          </div>
          {/* Second Section */}
          <div className='text-white nav-bg-custom'>
            <div className='d-flex justify-content-center pt-2 pb-2 nav-border-btm'>
              <input type='text' className='nav-input-bg' placeholder='Find or start a conversation' />
            </div>
            <div className='pt-2'>
              <ul className='list-group-item px-md-0 list-unstyled'>
                <li className='d-flex align-items-baseline'>
                  <i className='fa fa-user-circle ms-2 me-2'></i>
                  <p className='text-size'>Friends</p>
                </li>
                <li className='d-flex'>
                  <div className='d-flex align-items-baseline me-5 text-muted fw-bold'>
                    <i className='fa fa-user-circle ms-2 me-2'></i>
                    <p className='text-size'>Nitro</p>
                  </div>
                  <p className='text-white text-new'>NEW</p>
                </li>
                <li className='d-flex align-items-baseline text-muted fw-bold'>
                  <i className="fa-sharp fa-solid fa-message ms-2 me-2"></i>
                  <p className='text-size'>Message Requests</p>
                </li>

                <li className='d-flex align-items-baseline justify-content-between ms-2 me-2 text-muted fw-bold'>
                  <p className='text-size'>Direct Messages</p>
                  <i className='fa fa-plus'></i>
                </li>
                <li className=''>
                  <div className='d-flex align-items-baseline'>
                    <i className='fa-solid fa-user-group ms-2 me-2 main-cnt-cry-text'></i>
                    <div>
                      <p className='mb-0 text-size'>Crypserve, BeardedBro</p>
                      <p className='text-small-size'>3 Members</p>
                    </div>
                  </div>
                </li>
                <li className='d-flex align-items-baseline fw-bold'>
                  <i className='fa fa-user-circle ms-2 me-2'></i>
                  <p>BeardedBro</p>
                </li>
                <li className='fw-bold'>
                  <div className='d-flex align-items-baseline'>
                    <i className='fa-solid fa-user-group ms-2 me-2 nft-text-main-content'></i>
                    <div className='text-muted fw-bold'>
                      <p className='mb-0 text-size'>NFT</p>
                      <p className='text-small-size'>6 Members</p>
                    </div>
                  </div>
                </li>
                <li className='d-flex align-items-baseline'>
                  <i className='fa fa-user-circle ms-2 me-2'></i>
                  <p className='text-muted fw-bold text-size'>Cilnarix Support</p>
                </li>
                <li className=''>
                  <div className='d-flex align-items-baseline'>
                    <i className='fa-solid fa-user-group ms-2 me-2 text-blockchain'></i>
                    <div className='text-muted fw-bold'>
                      <p className='mb-0 text-size'>BLOCKCHAIN BOYS</p>
                      <p className='text-small-size'>1 Member</p>
                    </div>
                  </div>
                </li>
                <li className=''>
                  <div className='d-flex align-items-baseline'>
                    <i className='fa-solid fa-user-group ms-2 me-2 text-immy-lilithy'></i>
                    <div className='text-muted fw-bold'>
                      <p className='mb-0 text-size'>immy8285, Lilithty, St....</p>
                      <p className='text-small-size'>4 Members</p>
                    </div>
                  </div>
                </li>
                <li className=''>
                  <div className='d-flex align-items-baseline'>
                    <i className='fa-solid fa-user-group ms-2 me-2 main-cnt-cry-text'></i>
                    <div className='text-muted fw-bold'>
                      <p className='mb-0 text-size'>Sad clown collective</p>
                      <p className='text-small-size'>5 Members</p>
                    </div>
                  </div>
                </li>
                <li className=''>
                  <div className='d-flex align-items-baseline'>
                    <i className='fa-solid fa-user-group ms-2 me-2 text-rockpals-nft'></i>
                    <div className='text-muted fw-bold'>
                      <p className='mb-0 text-size'>RockPalsNFT</p>
                      <p className='text-small-size'>2 Members</p>
                    </div>
                  </div>
                </li>
                <li className=''>
                  <div className='d-flex align-items-baseline'>
                    <i className='fa-solid fa-user-group ms-2 me-2 text-rockpals-nft'></i>
                    <div className='text-muted fw-bold'>
                      <p className='mb-0 text-size'>InvestmentjoyNFT</p>
                      <p className='text-small-size'>4 Members</p>
                    </div>
                  </div>
                </li>

                <li className='d-flex align-items-baseline justify-content-between ms-2 me-2'>
                  <div className='d-flex align-items-sm-baseline'>
                    <i className='fa-brands fa-discord text-kubit'></i>
                    <div className='ms-2'>
                      <p className='mb-0 fw-bold text-size'>kubit</p>
                      <p className='text-muted text-small-size'>#0915</p>
                    </div>
                  </div>
                  <i className="fa-solid fa-microphone-slash"></i>
                  <i className="fa-solid fa-headphones"></i>
                  <i className="fa-solid fa-gear"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className='main-content-bg'>
          <div className='col-lg-12 col-md-12 col-xs-12'>
            <div className='d-flex pt-2 pb-2 text-white content-border'>
              <div className='col-lg-2 col-md-2 col-xs-2'>
                <i className='fa fa-user-circle ms-2 me-2'></i>
                <span className='text-size fw-bold'>
                  Friends
                </span>
              </div>
              <div className='col-lg-2 col-md-2 col-xs-2'>
                <span className='text-size fw-bold p-1 online-text-bg'>
                  Online
                </span>
              </div>
              <div className='col-lg-2 col-md-2 col-xs-2'><span className='text-size fw-bold text-white-50'>
                All
              </span></div>
              <div className='col-lg-2 col-md-2 col-xs-2'><span className='text-size fw-bold text-white-50'>
                Pending
              </span></div>
              <div className='col-lg-2 col-md-2 col-xs-2'> <span className='text-size fw-bold text-white-50'>
                Blocked
              </span></div>
              <div className='col-lg-2 col-md-2 col-xs-2'><span className='text-size fw-bold p-1 text-add-frnd-bg' onClick={handleShow}>
                Add Friend
              </span></div>
            </div>
          </div>

          <div class="input-group input-pd-custom">
            <input type="text" class="form-control input-text-bg" placeholder="Search" name="search" />
            <div class="input-group-btn btn-input-bg">
              <button class="btn btn-default btn-search-border" type="submit"><i class="fa fa-search"></i></button>
            </div>
          </div>
          <div className='input-pd-custom'>
            <p className='pb-3 text-white-50 text-online-custom'>
              Online-2
            </p>
            <div>
              <li className='text-white-50 list-style-custom'>
                <div className='d-flex justify-content-between text-online-custom'>
                  <div className='d-flex'>
                    <i className='fa-solid fa-user-group me-2 mb-4 beard-text-custom'></i>
                    <div>
                      <p className='mb-0 text-size text-white fw-bold'>BeardedBro</p>
                      <p className='text-small-size'>Idle</p>
                    </div>
                  </div>

                  <div className='d-flex mb-4 me-4'>
                    <i className='fa-sharp fa-solid fa-message me-2 fa-solid-msg-custom'></i>

                    <i class="fa fa-ellipsis-v fa-solid-msg-custom" aria-hidden="true"></i>
                  </div>
                </div>
              </li>
            </div>

            <div className='pt-3'>
              <li className='text-white-50 list-style-custom'>
                <div className='d-flex justify-content-between text-online-custom'>
                  <div className='d-flex'>
                    <i className='fa-solid fa-user-group me-2 mb-4 lilithy-icon-custom'></i>
                    <div>
                      <p className='mb-0 text-size text-white fw-bold'>Lilithty</p>
                      <p className='text-small-size'>Idle</p>
                    </div>
                  </div>

                  <div className='d-flex mb-4 me-4'>
                    <i className='fa-sharp fa-solid fa-message me-2 fa-solid-msg-custom'></i>

                    <i class="fa fa-ellipsis-v fa-solid-msg-custom" aria-hidden="true"></i>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="fnamr">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
